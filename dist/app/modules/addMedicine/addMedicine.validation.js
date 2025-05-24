"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineValidationSchema = void 0;
const zod_1 = require("zod");
// Zod validation schema for Medicine
exports.MedicineValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'ID is required').max(255, 'ID is too long'),
    name: zod_1.z.string().min(1, 'Name is required').max(255, 'Name is too long'),
    description: zod_1.z.string().min(10, 'Description must be at least 10 characters'),
    price: zod_1.z
        .number({ required_error: 'Price is required' })
        .min(0, 'Price cannot be negative'),
    stock: zod_1.z
        .number({ required_error: 'Stock is required' })
        .min(0, 'Stock cannot be negative'),
    requiresPrescription: zod_1.z.boolean(),
    manufacturer: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Manufacturer name is required').max(255, 'Name is too long'),
        address: zod_1.z.string().optional(),
        contact: zod_1.z
            .string()
            .optional()
    }),
    expiryDate: zod_1.z
        .string()
        .min(1, 'Expiry date is required')
        .refine((val) => new Date(val) > new Date(), 'Expiry date must be in the future'),
});
