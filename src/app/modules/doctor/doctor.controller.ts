import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { doctorService } from "./doctor.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

// Create a new doctor
const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const validatedData = req.body;

  const newDoctor = await doctorService.createDoctor(validatedData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Doctor created successfully!",
    data: newDoctor,
  });
});

// Get all doctors
const getDoctors = catchAsync(async (_req: Request, res: Response) => {
  const doctors = await doctorService.getDoctors();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Doctors retrieved successfully",
    data: doctors,
  });
});

// Get a single doctor by ID
const getSingleDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const doctor = await doctorService.getSingleDoctor(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Doctor retrieved successfully",
    data: doctor,
  });
});

// Update a doctor by ID
const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const updatedDoctor = await doctorService.updateDoctor(id, payload);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Doctor updated successfully",
    data: updatedDoctor,
  });
});

// Delete a doctor by ID
const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedDoctor = await doctorService.deleteDoctor(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Doctor deleted successfully",
    data: deletedDoctor,
  });
});

export const doctorController = {
  createDoctor,
  getDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
};
