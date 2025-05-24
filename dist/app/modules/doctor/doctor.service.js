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
exports.doctorService = void 0;
const doctor_model_1 = require("./doctor.model");
// Create a new doctor
const createDoctor = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_model_1.Doctor.create(data);
    return result;
});
// Get all doctors
const getDoctors = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_model_1.Doctor.find();
    return result;
});
// Get single doctor by ID
const getSingleDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_model_1.Doctor.findById(id);
    return result;
});
// Delete doctor by ID
const deleteDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_model_1.Doctor.findByIdAndDelete(id);
    return result;
});
// Update doctor by ID
const updateDoctor = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield doctor_model_1.Doctor.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.doctorService = {
    createDoctor,
    getDoctors,
    getSingleDoctor,
    deleteDoctor,
    updateDoctor,
};
