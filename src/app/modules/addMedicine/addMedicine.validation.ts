import { z } from 'zod';

// Zod validation schema for Medicine
export const MedicineValidationSchema = z.object({
  id: z.string().min(1, 'ID is required').max(255, 'ID is too long'),
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z
    .number({ required_error: 'Price is required' })
    .min(0, 'Price cannot be negative'),
  stock: z
    .number({ required_error: 'Stock is required' })
    .min(0, 'Stock cannot be negative'),
  requiresPrescription: z.boolean(),
  manufacturer: z.object({
    name: z.string().min(1, 'Manufacturer name is required').max(255, 'Name is too long'),
    address: z.string().optional(),
    contact: z
      .string()
      .optional()
  }),
  expiryDate: z
    .string()
    .min(1, 'Expiry date is required')
    .refine((val) => new Date(val) > new Date(), 'Expiry date must be in the future'),
});
