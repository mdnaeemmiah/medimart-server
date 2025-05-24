"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addMedicine_controller_1 = require("./addMedicine.controller");
const medicineRouter = (0, express_1.Router)();
// Route to get all medicines
medicineRouter.get('/', addMedicine_controller_1.medicineController.getMedicines);
// Route to get a single medicine by ID
medicineRouter.get('/:medicineId', addMedicine_controller_1.medicineController.getSingleMedicine);
// Route to create a new medicine
medicineRouter.post('/create', addMedicine_controller_1.medicineController.createMedicine);
// Route to update an existing medicine by ID
medicineRouter.put('/:id', addMedicine_controller_1.medicineController.updateMedicine);
// Route to delete a medicine by ID
medicineRouter.delete('/:id', addMedicine_controller_1.medicineController.deleteMedicine);
exports.default = medicineRouter;
