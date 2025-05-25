import { z } from 'zod';

export const helpRequestSchema = z.object({
  image: z.string().url({ message: 'Image must be a valid URL' }),
  video: z.string().url({ message: 'Video must be a valid URL' }).optional(),
  patientName: z.string().min(1, 'Patient name is required'),
  disease: z.string().min(1, 'Disease name is required'),
  duration: z.string().min(1, 'Duration is required'), // e.g., "6 months"
  medicinesTaken: z.array(z.string().min(1)).min(1, 'At least one medicine must be listed'),
  report: z.string().min(1, 'Report is required'),
});