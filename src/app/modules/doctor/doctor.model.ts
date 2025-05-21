import { Schema, model, Document } from "mongoose";

export interface IDoctor extends Document {
  name: string;
  image: string;
  hospital: string;
  date: string;
  time: string;
  day: string;
}

const doctorSchema = new Schema<IDoctor>(
  {
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
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const Doctor = model<IDoctor>("Doctor", doctorSchema);