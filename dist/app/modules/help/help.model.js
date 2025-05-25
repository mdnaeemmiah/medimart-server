"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const helpRequestSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: false,
    },
    patientName: {
        type: String,
        required: true,
        trim: true,
    },
    disease: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    medicinesTaken: {
        type: [String],
        required: true,
    },
    report: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // automatically adds createdAt and updatedAt
});
// Avoid model overwrite issue in development
const HelpRequest = mongoose_1.models.HelpRequest || (0, mongoose_1.model)('HelpRequest', helpRequestSchema);
exports.default = HelpRequest;
