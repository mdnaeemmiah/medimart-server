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
exports.medicineService = void 0;
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const mongoose_1 = __importDefault(require("mongoose"));
const addMedicine_model_1 = __importDefault(require("./addMedicine.model"));
exports.medicineService = {
    // Get all medicines
    getMedicines: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const medicines = yield addMedicine_model_1.default.find();
            return medicines;
        }
        catch (error) {
            throw new AppError_1.default(500, 'Error retrieving medicines');
        }
    }),
    // Get a single medicine by ID
    getSingleMedicine: (medicineId) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.Types.ObjectId.isValid(medicineId)) {
            throw new AppError_1.default(400, 'Invalid medicine ID');
        }
        try {
            const medicine = yield addMedicine_model_1.default.findById(medicineId);
            if (!medicine) {
                throw new AppError_1.default(404, 'Medicine not found');
            }
            return medicine;
        }
        catch (error) {
            throw new AppError_1.default(500, 'Error retrieving medicine');
        }
    }),
    // Create a new medicine
    createMedicine: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Log the incoming data for debugging
            console.log('Creating medicine with data:', data);
            const newMedicine = new addMedicine_model_1.default(data);
            yield newMedicine.save();
            // Optionally log the saved medicine after it's created
            console.log('Medicine created:', newMedicine);
            return newMedicine;
        }
        catch (error) {
            console.error('Error creating medicine:', error);
            throw new AppError_1.default(500, 'Error creating medicine');
        }
    }),
    // Update an existing medicine by ID
    updateMedicine: (medicineId, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.Types.ObjectId.isValid(medicineId)) {
            throw new AppError_1.default(400, 'Invalid medicine ID');
        }
        try {
            const updatedMedicine = yield addMedicine_model_1.default.findByIdAndUpdate(medicineId, data, { new: true } // Return the updated medicine
            );
            if (!updatedMedicine) {
                throw new AppError_1.default(404, 'Medicine not found');
            }
            return updatedMedicine;
        }
        catch (error) {
            throw new AppError_1.default(500, 'Error updating medicine');
        }
    }),
    // Delete a medicine by ID
    deleteMedicine: (medicineId) => __awaiter(void 0, void 0, void 0, function* () {
        if (!mongoose_1.default.Types.ObjectId.isValid(medicineId)) {
            throw new AppError_1.default(400, 'Invalid medicine ID');
        }
        try {
            const deletedMedicine = yield addMedicine_model_1.default.findByIdAndDelete(medicineId);
            if (!deletedMedicine) {
                throw new AppError_1.default(404, 'Medicine not found');
            }
            return deletedMedicine;
        }
        catch (error) {
            throw new AppError_1.default(500, 'Error deleting medicine');
        }
    }),
};
