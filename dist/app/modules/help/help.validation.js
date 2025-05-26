"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpRequestSchema = void 0;
const zod_1 = require("zod");
exports.helpRequestSchema = zod_1.z.object({
    image: zod_1.z.string().url({ message: 'Image must be a valid URL' }),
    video: zod_1.z.string().url({ message: 'Video must be a valid URL' }).optional(),
    patientName: zod_1.z.string().min(1, 'Patient name is required'),
    disease: zod_1.z.string().min(1, 'Disease name is required'),
    duration: zod_1.z.string().min(1, 'Duration is required'), // e.g., "6 months"
    medicinesTaken: zod_1.z.array(zod_1.z.string().min(1)).min(1, 'At least one medicine must be listed'),
    report: zod_1.z.string().min(1, 'Report is required'),
});
