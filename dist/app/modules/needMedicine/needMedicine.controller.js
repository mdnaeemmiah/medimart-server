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
exports.needMedicineController = void 0;
const http_status_codes_1 = require("http-status-codes");
const needMedicine_service_1 = require("./needMedicine.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
// Create a new NeedMedicine request
const createNeedMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = req.body;
    const newNeedMedicine = yield needMedicine_service_1.needMedicineService.createNeedMedicine(validatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "NeedMedicine request created successfully!",
        data: newNeedMedicine,
    });
}));
// Get single NeedMedicine request by ID
const getNeedMedicineById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const needMedicine = yield needMedicine_service_1.needMedicineService.getNeedMedicineById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "NeedMedicine request retrieved successfully",
        data: needMedicine,
    });
}));
// Get all NeedMedicine requests
const getAllNeedMedicines = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const needMedicines = yield needMedicine_service_1.needMedicineService.getAllNeedMedicines();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "All NeedMedicine requests retrieved successfully",
        data: needMedicines,
    });
}));
// Update a NeedMedicine request by ID
const updateNeedMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    const updatedNeedMedicine = yield needMedicine_service_1.needMedicineService.updateNeedMedicine(id, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "NeedMedicine request updated successfully",
        data: updatedNeedMedicine,
    });
}));
// Delete a NeedMedicine request by ID
const deleteNeedMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield needMedicine_service_1.needMedicineService.deleteNeedMedicine(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "NeedMedicine request deleted successfully",
        data: deleted,
    });
}));
exports.needMedicineController = {
    createNeedMedicine,
    getNeedMedicineById,
    getAllNeedMedicines,
    updateNeedMedicine,
    deleteNeedMedicine,
};
