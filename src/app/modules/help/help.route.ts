import express from "express";
import { helpController } from "./help.controller";

const helpRoute = express.Router();

// Create a new help request
helpRoute.post("/create", helpController.createHelpRequest);

// Get all help requests
helpRoute.get("/", helpController.getAllHelpRequests);

// Get a single help request by ID
helpRoute.get("/:id", helpController.getHelpRequestById);

// Update a help request by ID
helpRoute.put("/:id", helpController.updateHelpRequest);

// Delete a help request by ID
helpRoute.delete("/:id", helpController.deleteHelpRequest);

export default helpRoute;
