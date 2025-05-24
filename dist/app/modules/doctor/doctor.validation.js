"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorSchema = void 0;
const zod_1 = require("zod");
exports.doctorSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Doctor name is required"),
    image: zod_1.z.string().url("Image must be a valid URL"),
    hospital: zod_1.z.string().min(1, "Hospital name is required"),
    date: zod_1.z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    time: zod_1.z
        .string()
        .regex(/^([1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, "Time must be in hh:mm AM/PM format"),
    day: zod_1.z.enum([
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]),
});
