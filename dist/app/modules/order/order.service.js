"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const http_status_1 = __importDefault(require("http-status"));
const order_utils_1 = require("./order.utils");
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const addMedicine_model_1 = __importDefault(require("../addMedicine/addMedicine.model"));
// import { IUser } from "../auth/auth.interface";
const createOrder = (user, payload, client_ip) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Validate user
    if (!user) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "User not authenticated");
    }
    // Validate products
    if (!((_a = payload === null || payload === void 0 ? void 0 : payload.products) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, "Order is not specified");
    }
    // Calculate total price and validate products
    let totalPrice = 0;
    const productDetails = yield Promise.all(payload.products.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield addMedicine_model_1.default.findById(item.product);
        if (!product) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Product not found: ${item.product}`);
        }
        // Ensure product price is a valid number
        if (typeof product.price !== "number" || isNaN(product.price)) {
            throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Invalid price for product: ${product._id}`);
        }
        // Ensure quantity is a valid number
        if (typeof item.quantity !== "number" || isNaN(item.quantity)) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `Invalid quantity for product: ${product._id}`);
        }
        // Calculate subtotal
        const subtotal = product.price * item.quantity;
        totalPrice += subtotal;
        return {
            product: product._id,
            quantity: item.quantity,
        };
    })));
    // Ensure totalPrice is a valid number
    if (isNaN(totalPrice)) {
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Failed to calculate total price");
    }
    // Create the order
    const order = yield order_model_1.default.create({
        user: user._id,
        products: productDetails,
        totalPrice,
        status: "Pending", // Default status
    });
    // console.log({order},'naeem')
    // Payment integration
    const shurjopayPayload = {
        amount: totalPrice,
        order_id: order._id, // Use MongoDB-generated _id
        currency: "BDT",
        customer_name: user.name,
        customer_address: user.address || "N/A",
        customer_email: user.email,
        customer_phone: user.phone || "N/A",
        customer_city: user.city || "N/A",
        client_ip,
    };
    // console.log(shurjopayPayload)
    const payment = yield order_utils_1.orderUtils.makePaymentAsync(shurjopayPayload);
    // console.log(payment)
    // Update order with payment details
    if (payment === null || payment === void 0 ? void 0 : payment.transactionStatus) {
        yield order_model_1.default.findByIdAndUpdate(order._id, {
            transaction: {
                id: payment.sp_order_id,
                transactionStatus: payment.transactionStatus,
            },
        });
    }
    return payment.checkout_url;
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield order_model_1.default.find();
    return data;
});
const verifyPayment = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const verifiedPayment = yield order_utils_1.orderUtils.verifyPaymentAsync(order_id);
    if (verifiedPayment.length) {
        yield order_model_1.default.findOneAndUpdate({
            "transaction.id": order_id,
        }, {
            "transaction.bank_status": verifiedPayment[0].bank_status,
            "transaction.sp_code": verifiedPayment[0].sp_code,
            "transaction.sp_message": verifiedPayment[0].sp_message,
            "transaction.transactionStatus": verifiedPayment[0].transaction_status,
            "transaction.method": verifiedPayment[0].method,
            "transaction.date_time": verifiedPayment[0].date_time,
            status: verifiedPayment[0].bank_status == "Success"
                ? "Paid"
                : verifiedPayment[0].bank_status == "Failed"
                    ? "Pending"
                    : verifiedPayment[0].bank_status == "Cancel"
                        ? "Cancelled"
                        : "",
        });
    }
    return verifiedPayment;
});
exports.orderService = {
    createOrder,
    getOrders,
    verifyPayment,
};
