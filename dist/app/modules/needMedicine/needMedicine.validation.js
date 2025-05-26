"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeedMedicineZodSchema = void 0;
const zod_1 = require("zod");
exports.NeedMedicineZodSchema = zod_1.z.object({
    medicineName: zod_1.z.string().min(1, "Medicine name is required"),
    image: zod_1.z.string().url("Image must be a valid URL"), // or use z.string() if you allow base64 or plain strings
    postDate: zod_1.z.preprocess((arg) => (arg ? new Date(arg) : new Date()), zod_1.z.date()), // optional, defaults to now
    needDate: zod_1.z.preprocess((arg) => new Date(arg), zod_1.z.date()),
    contactNumber: zod_1.z.string().min(5, "Contact number is required"),
    requesterName: zod_1.z.string().min(1, "Requester name is required"),
    location: zod_1.z.string().min(1, "Location is required"),
    notes: zod_1.z.string().optional(),
    status: zod_1.z.enum(["pending", "fulfilled", "cancelled"]).optional().default("pending"),
    //   userId: z
    //     .string()
    //     .refine((val) => Types.ObjectId.isValid(val), {
    //       message: "Invalid userId (must be a valid ObjectId)",
    //     }),
});
