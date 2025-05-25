import mongoose, { Schema } from "mongoose";
import { INeedMedicine } from "./needMedicine.intarface";


const NeedMedicineSchema = new Schema<INeedMedicine>(
  {
    medicineName: { type: String, required: true },
    image: { type: String, required: true },
    postDate: { type: Date, default: Date.now },
    needDate: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    requesterName: { type: String, required: true },
    location: { type: String, required: true },
    notes: { type: String },
    status: {
      type: String,
      enum: ["pending", "fulfilled", "cancelled"],
      default: "pending",
    },
    // userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const NeedMedicineModel = mongoose.model<INeedMedicine>(
  "NeedMedicineModel",
  NeedMedicineSchema
);
