import AppError from '../../../errors/AppError';
import mongoose from 'mongoose';
import MedicineModel from './addMedicine.model';


export const medicineService = {
  // Get all medicines
  getMedicines: async () => {
    try {
      const medicines = await MedicineModel.find();
      return medicines;
    } catch (error) {
      throw new AppError(500, 'Error retrieving medicines');
    }
  },

  // Get a single medicine by ID
  getSingleMedicine: async (medicineId: string) => {
    if (!mongoose.Types.ObjectId.isValid(medicineId)) {
      throw new AppError(400, 'Invalid medicine ID');
    }

    try {
      const medicine = await MedicineModel.findById(medicineId);

      if (!medicine) {
        throw new AppError(404, 'Medicine not found');
      }

      return medicine;
    } catch (error) {
      throw new AppError(500, 'Error retrieving medicine');
    }
  },

  // Create a new medicine
  createMedicine: async (data: any) => {
    try {
      // Log the incoming data for debugging
      console.log('Creating medicine with data:', data);

      const newMedicine = new MedicineModel(data);
      await newMedicine.save();

      // Optionally log the saved medicine after it's created
      console.log('Medicine created:', newMedicine);

      return newMedicine;
    } catch (error) {
      console.error('Error creating medicine:', error);
      throw new AppError(500, 'Error creating medicine');
    }
  },

  // Update an existing medicine by ID
  updateMedicine: async (medicineId: string, data: any) => {
    if (!mongoose.Types.ObjectId.isValid(medicineId)) {
      throw new AppError(400, 'Invalid medicine ID');
    }

    try {
      const updatedMedicine = await MedicineModel.findByIdAndUpdate(
        medicineId,
        data,
        { new: true } // Return the updated medicine
      );

      if (!updatedMedicine) {
        throw new AppError(404, 'Medicine not found');
      }

      return updatedMedicine;
    } catch (error) {
      throw new AppError(500, 'Error updating medicine');
    }
  },

  // Delete a medicine by ID
  deleteMedicine: async (medicineId: string) => {
    if (!mongoose.Types.ObjectId.isValid(medicineId)) {
      throw new AppError(400, 'Invalid medicine ID');
    }

    try {
      const deletedMedicine = await MedicineModel.findByIdAndDelete(medicineId);

      if (!deletedMedicine) {
        throw new AppError(404, 'Medicine not found');
      }

      return deletedMedicine;
    } catch (error) {
      throw new AppError(500, 'Error deleting medicine');
    }
  },
};
