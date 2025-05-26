"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const mongoose_1 = require("mongoose");
const doctorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    hospital: { type: String, required: true },
    date: { type: String, required: true }, // Format: YYYY-MM-DD
    time: { type: String, required: true }, // Format: HH:mm AM/PM
    day: {
        type: String,
        required: true,
        enum: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
}, {
    timestamps: true, // adds createdAt and updatedAt
});
exports.Doctor = (0, mongoose_1.model)("Doctor", doctorSchema);
