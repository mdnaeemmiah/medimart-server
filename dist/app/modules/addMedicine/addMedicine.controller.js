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
exports.medicineController = void 0;
const http_status_codes_1 = require("http-status-codes");
const mongoose_1 = __importDefault(require("mongoose"));
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const addMedicine_service_1 = require("./addMedicine.service");
const addMedicine_model_1 = __importDefault(require("./addMedicine.model"));
// Get all medicines
const getMedicines = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addMedicine_service_1.medicineService.getMedicines();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Medicines retrieved successfully',
        data: result,
    });
}));
// Get a single medicine
const getSingleMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicineId = req.params.medicineId;
    const result = yield addMedicine_service_1.medicineService.getSingleMedicine(medicineId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Medicine retrieved successfully',
        data: result,
    });
}));
// Create a new medicine
const createMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // Log the incoming body to show the data that is being created
    console.log('Received data for medicine creation:', body);
    // Call the service to create the medicine
    const newMedicine = yield addMedicine_service_1.medicineService.createMedicine(body);
    // Log the created medicine (optional, to check the result)
    console.log('Medicine created successfully:', newMedicine);
    // Send response back to the client
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Medicine created successfully',
        data: newMedicine,
    });
}));
// Update a medicine
const updateMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Invalid medicine ID');
    }
    const updatedMedicine = yield addMedicine_service_1.medicineService.updateMedicine(id, body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Medicine updated successfully',
        data: updatedMedicine,
    });
}));
// Delete a medicine
const deleteMedicine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log('Received ID for deletion:', id); // Debugging log
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        console.error('Invalid ID format:', id);
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Invalid medicine ID');
    }
    const deletedMedicine = yield addMedicine_model_1.default.findByIdAndDelete(id);
    if (!deletedMedicine) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Medicine not found');
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Medicine deleted successfully',
        data: deletedMedicine,
    });
}));
exports.medicineController = {
    getMedicines,
    getSingleMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine,
};
