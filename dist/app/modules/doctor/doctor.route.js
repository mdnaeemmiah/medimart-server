"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doctor_controller_1 = require("./doctor.controller");
const doctorRoute = express_1.default.Router();
// Create a new doctor
doctorRoute.post("/create", doctor_controller_1.doctorController.createDoctor);
// Get all doctors
doctorRoute.get("/", doctor_controller_1.doctorController.getDoctors);
// Get a single doctor by ID
doctorRoute.get("/:id", doctor_controller_1.doctorController.getSingleDoctor);
// Update a doctor by ID
doctorRoute.patch("/:id", doctor_controller_1.doctorController.updateDoctor);
// Delete a doctor by ID
doctorRoute.delete("/:id", doctor_controller_1.doctorController.deleteDoctor);
exports.default = doctorRoute;
