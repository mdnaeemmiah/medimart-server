import express from "express";
import { doctorController } from "./doctor.controller";

const doctorRoute = express.Router();

// Create a new doctor
doctorRoute.post("/create", doctorController.createDoctor);

// Get all doctors
doctorRoute.get("/", doctorController.getDoctors);

// Get a single doctor by ID
doctorRoute.get("/:id", doctorController.getSingleDoctor);

// Update a doctor by ID
doctorRoute.patch("/:id", doctorController.updateDoctor);

// Delete a doctor by ID
doctorRoute.delete("/:id", doctorController.deleteDoctor);

export default doctorRoute;
