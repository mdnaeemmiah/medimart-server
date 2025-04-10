import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { messageService } from "./message.service";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";


// Create a new message
const createMessage = catchAsync(async (req: Request, res: Response) => {
  const validatedData = req.body

  const newMessage = await messageService.createMessage(validatedData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Message created successfully!",
    data: newMessage,
  });
});


// Get all messages
const getAllMessages = catchAsync(async (_req: Request, res: Response) => {
  const messages = await messageService.getAllMessages();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Messages retrieved successfully",
    data: messages,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const deleted = await messageService.deleteMessage(id);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Message deleted successfully",
      data: deleted,
    });
  });

export const messageController = {
  createMessage,
  getAllMessages,
  deleteMessage
};


