import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { helpService } from './help.service';
import { helpRequestSchema } from './help.validation';


// Create a new help request
const createHelpRequest = catchAsync(async (req: Request, res: Response) => {
  const parsed = helpRequestSchema.parse(req.body);

  const newHelp = await helpService.createHelpRequest(parsed);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Help request created successfully!',
    data: newHelp,
  });
});

// Get all help requests
const getAllHelpRequests = catchAsync(async (_req: Request, res: Response) => {
  const allHelpRequests = await helpService.getAllHelpRequests();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Help requests retrieved successfully!',
    data: allHelpRequests,
  });
});

// Get a single help request by ID
const getHelpRequestById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const helpRequest = await helpService.getHelpRequestById(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Help request retrieved successfully!',
    data: helpRequest,
  });
});

// Update a help request by ID
const updateHelpRequest = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  // Optionally, you can validate `data` here with zod or other schema
  // const parsed = helpRequestSchema.partial().parse(data); // partial for update

  const updatedHelpRequest = await helpService.updateHelpRequest(id, data);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Help request updated successfully!',
    data: updatedHelpRequest,
  });
});

// Delete a help request by ID
const deleteHelpRequest = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await helpService.deleteHelpRequest(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Help request deleted successfully!',
    data: deleted,
  });
});

export const helpController = {
  createHelpRequest,
  getAllHelpRequests,
  getHelpRequestById,
  updateHelpRequest,
  deleteHelpRequest,
};
