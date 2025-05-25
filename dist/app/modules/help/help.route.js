"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const help_controller_1 = require("./help.controller");
const helpRoute = express_1.default.Router();
// Create a new help request
helpRoute.post("/create", help_controller_1.helpController.createHelpRequest);
// Get all help requests
helpRoute.get("/", help_controller_1.helpController.getAllHelpRequests);
// Get a single help request by ID
helpRoute.get("/:id", help_controller_1.helpController.getHelpRequestById);
// Update a help request by ID
helpRoute.patch("/:id", help_controller_1.helpController.updateHelpRequest);
// Delete a help request by ID
helpRoute.delete("/:id", help_controller_1.helpController.deleteHelpRequest);
exports.default = helpRoute;
