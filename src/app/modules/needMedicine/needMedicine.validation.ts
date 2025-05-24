import { z } from "zod";
import { Types } from "mongoose";

export const NeedMedicineZodSchema = z.object({
  medicineName: z.string().min(1, "Medicine name is required"),
  image: z.string().url("Image must be a valid URL"), // or use z.string() if you allow base64 or plain strings
  postDate: z.preprocess((arg) => (arg ? new Date(arg as string) : new Date()), z.date()), // optional, defaults to now
  needDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  contactNumber: z.string().min(5, "Contact number is required"),
  requesterName: z.string().min(1, "Requester name is required"),
  location: z.string().min(1, "Location is required"),
  notes: z.string().optional(),
  status: z.enum(["pending", "fulfilled", "cancelled"]).optional().default("pending"),
  userId: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid userId (must be a valid ObjectId)",
    }),
});
