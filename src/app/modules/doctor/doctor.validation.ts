import { z } from "zod";

export const doctorSchema = z.object({
  name: z.string().min(1, "Doctor name is required"),
  image: z.string().url("Image must be a valid URL"),
  hospital: z.string().min(1, "Hospital name is required"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z
    .string()
    .regex(/^([1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, "Time must be in hh:mm AM/PM format"),
  day: z.enum([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]),
});