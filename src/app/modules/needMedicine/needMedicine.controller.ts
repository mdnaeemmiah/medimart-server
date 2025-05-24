import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { needMedicineService } from "./needMedicine.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

// Create a new NeedMedicine request
const createNeedMedicine = catchAsync(async (req: Request, res: Response) => {
  const validatedData = req.body;

  const newNeedMedicine = await needMedicineService.createNeedMedicine(validatedData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "NeedMedicine request created successfully!",
    data: newNeedMedicine,
  });
});

// Get single NeedMedicine request by ID
const getNeedMedicineById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const needMedicine = await needMedicineService.getNeedMedicineById(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "NeedMedicine request retrieved successfully",
    data: needMedicine,
  });
});

// Get all NeedMedicine requests
const getAllNeedMedicines = catchAsync(async (_req: Request, res: Response) => {
  const needMedicines = await needMedicineService.getAllNeedMedicines();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All NeedMedicine requests retrieved successfully",
    data: needMedicines,
  });
});

// Update a NeedMedicine request by ID
const updateNeedMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  const updatedNeedMedicine = await needMedicineService.updateNeedMedicine(id, updateData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "NeedMedicine request updated successfully",
    data: updatedNeedMedicine,
  });
});

// Delete a NeedMedicine request by ID
const deleteNeedMedicine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await needMedicineService.deleteNeedMedicine(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "NeedMedicine request deleted successfully",
    data: deleted,
  });
});

export const needMedicineController = {
  createNeedMedicine,
  getNeedMedicineById,
  getAllNeedMedicines,
  updateNeedMedicine,
  deleteNeedMedicine,
};
