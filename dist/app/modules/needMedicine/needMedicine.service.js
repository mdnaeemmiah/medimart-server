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
Object.defineProperty(exports, "__esModule", { value: true });
exports.needMedicineService = void 0;
const needMedicine_model_1 = require("./needMedicine.model");
const createNeedMedicine = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield needMedicine_model_1.NeedMedicineModel.create(data);
    return result;
});
const getNeedMedicineById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield needMedicine_model_1.NeedMedicineModel.findById(id);
    return result;
});
const getAllNeedMedicines = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield needMedicine_model_1.NeedMedicineModel.find();
    return result;
});
const updateNeedMedicine = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield needMedicine_model_1.NeedMedicineModel.findByIdAndUpdate(id, data, { new: true });
    return result;
});
const deleteNeedMedicine = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield needMedicine_model_1.NeedMedicineModel.findByIdAndDelete(id);
    return result;
});
exports.needMedicineService = {
    createNeedMedicine,
    getNeedMedicineById,
    getAllNeedMedicines,
    updateNeedMedicine,
    deleteNeedMedicine,
};
