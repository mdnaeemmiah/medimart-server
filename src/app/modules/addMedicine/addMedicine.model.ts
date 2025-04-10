import mongoose, { Schema } from 'mongoose';
import { IMedicine } from './addMedicine.interface';


// Define the Medicine schema
const MedicineSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    requiresPrescription: { type: Boolean, required: true },
    manufacturer: {
      name: { type: String, required: true },
      address: { type: String },
      contact: { type: String },
    },
    expiryDate: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create the Medicine model
const MedicineModel = mongoose.model<IMedicine>('MedicineModel', MedicineSchema);

export default MedicineModel;
