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
exports.helpService = void 0;
const help_model_1 = __importDefault(require("./help.model"));
const createHelpRequest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield help_model_1.default.create(data);
    return result;
});
const getAllHelpRequests = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield help_model_1.default.find();
    return result;
});
const getHelpRequestById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield help_model_1.default.findById(id);
    return result;
});
const updateHelpRequest = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield help_model_1.default.findByIdAndUpdate(id, data, {
        new: true, // return the updated document
        runValidators: true, // validate before update
    });
    return result;
});
const deleteHelpRequest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield help_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.helpService = {
    createHelpRequest,
    getAllHelpRequests,
    getHelpRequestById,
    updateHelpRequest,
    deleteHelpRequest,
};
