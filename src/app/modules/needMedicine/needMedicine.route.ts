import express from "express";
import { needMedicineController } from "./needMedicine.controller";

const needMedicineRoute = express.Router();

// Create a new need medicine request
needMedicineRoute.post("/create", needMedicineController.createNeedMedicine);

// Get all need medicine requests
needMedicineRoute.get("/", needMedicineController.getAllNeedMedicines);

// Get a single need medicine request by ID
needMedicineRoute.get("/:id", needMedicineController.getNeedMedicineById);

// Update a need medicine request by ID
needMedicineRoute.put("/:id", needMedicineController.updateNeedMedicine);

// Delete a need medicine request by ID
needMedicineRoute.delete("/:id", needMedicineController.deleteNeedMedicine);

export default needMedicineRoute;
