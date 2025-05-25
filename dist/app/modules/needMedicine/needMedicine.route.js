"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const needMedicine_controller_1 = require("./needMedicine.controller");
const needMedicineRoute = express_1.default.Router();
// Create a new need medicine request
needMedicineRoute.post("/create", needMedicine_controller_1.needMedicineController.createNeedMedicine);
// Get all need medicine requests
needMedicineRoute.get("/", needMedicine_controller_1.needMedicineController.getAllNeedMedicines);
// Get a single need medicine request by ID
needMedicineRoute.get("/:id", needMedicine_controller_1.needMedicineController.getNeedMedicineById);
// Update a need medicine request by ID
needMedicineRoute.patch("/:id", needMedicine_controller_1.needMedicineController.updateNeedMedicine);
// Delete a need medicine request by ID
needMedicineRoute.delete("/:id", needMedicine_controller_1.needMedicineController.deleteNeedMedicine);
exports.default = needMedicineRoute;
