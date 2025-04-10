import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AppError from '../../../errors/AppError';
import { medicineService } from './addMedicine.service';
import MedicineModel from './addMedicine.model';


// Get all medicines
const getMedicines = catchAsync(async (req: Request, res: Response) => {
  const result = await medicineService.getMedicines();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Medicines retrieved successfully',
    data: result,
  });
});

// Get a single medicine
const getSingleMedicine = catchAsync(async (req: Request, res: Response) => {
  const medicineId = req.params.medicineId;
  const result = await medicineService.getSingleMedicine(medicineId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Medicine retrieved successfully',
    data: result,
  });
});

// Create a new medicine
const createMedicine = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  // Log the incoming body to show the data that is being created
  console.log('Received data for medicine creation:', body);

  // Call the service to create the medicine
  const newMedicine = await medicineService.createMedicine(body);

  // Log the created medicine (optional, to check the result)
  console.log('Medicine created successfully:', newMedicine);

  // Send response back to the client
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Medicine created successfully',
    data: newMedicine,
  });
});

// Update a medicine
const updateMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid medicine ID');
  }

  const updatedMedicine = await medicineService.updateMedicine(id, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Medicine updated successfully',
    data: updatedMedicine,
  });
});

// Delete a medicine
const deleteMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  console.log('Received ID for deletion:', id); // Debugging log

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error('Invalid ID format:', id);
    throw new AppError(StatusCodes.BAD_REQUEST, 'Invalid medicine ID');
  }

  const deletedMedicine = await MedicineModel.findByIdAndDelete(id);

  if (!deletedMedicine) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Medicine not found');
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Medicine deleted successfully',
    data: deletedMedicine,
  });
});

export const medicineController = {
  getMedicines,
  getSingleMedicine,
  createMedicine,
  updateMedicine,
  deleteMedicine,
};
