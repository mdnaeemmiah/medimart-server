
import { IHelpRequest } from './help.intarface';
import HelpRequest from './help.model';

const createHelpRequest = async (data: IHelpRequest) => {
  const result = await HelpRequest.create(data);
  return result;
};

const getAllHelpRequests = async () => {
  const result = await HelpRequest.find();
  return result;
};

const getHelpRequestById = async (id: string) => {
  const result = await HelpRequest.findById(id);
  return result;
};

const updateHelpRequest = async (id: string, data: Partial<IHelpRequest>) => {
  const result = await HelpRequest.findByIdAndUpdate(id, data, {
    new: true, // return the updated document
    runValidators: true, // validate before update
  });
  return result;
};

const deleteHelpRequest = async (id: string) => {
  const result = await HelpRequest.findByIdAndDelete(id);
  return result;
};

export const helpService = {
  createHelpRequest,
  getAllHelpRequests,
  getHelpRequestById,
  updateHelpRequest,
  deleteHelpRequest,
};
