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
exports.helpController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const help_service_1 = require("./help.service");
const help_validation_1 = require("./help.validation");
// Create a new help request
const createHelpRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsed = help_validation_1.helpRequestSchema.parse(req.body);
    const newHelp = yield help_service_1.helpService.createHelpRequest(parsed);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: 'Help request created successfully!',
        data: newHelp,
    });
}));
// Get all help requests
const getAllHelpRequests = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allHelpRequests = yield help_service_1.helpService.getAllHelpRequests();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Help requests retrieved successfully!',
        data: allHelpRequests,
    });
}));
// Get a single help request by ID
const getHelpRequestById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const helpRequest = yield help_service_1.helpService.getHelpRequestById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Help request retrieved successfully!',
        data: helpRequest,
    });
}));
// Update a help request by ID
const updateHelpRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    // Optionally, you can validate `data` here with zod or other schema
    // const parsed = helpRequestSchema.partial().parse(data); // partial for update
    const updatedHelpRequest = yield help_service_1.helpService.updateHelpRequest(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Help request updated successfully!',
        data: updatedHelpRequest,
    });
}));
// Delete a help request by ID
const deleteHelpRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield help_service_1.helpService.deleteHelpRequest(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Help request deleted successfully!',
        data: deleted,
    });
}));
exports.helpController = {
    createHelpRequest,
    getAllHelpRequests,
    getHelpRequestById,
    updateHelpRequest,
    deleteHelpRequest,
};
