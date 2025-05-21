
import { IDoctor } from "./doctor.intarface";
import { Doctor } from "./doctor.model";

// Create a new doctor
const createDoctor = async (data: IDoctor) => {
  const result = await Doctor.create(data);
  return result;
};

// Get all doctors
const getDoctors = async () => {
  const result = await Doctor.find();
  return result;
};

// Get single doctor by ID
const getSingleDoctor = async (id: string) => {
  const result = await Doctor.findById(id);
  return result;
};

// Delete doctor by ID
const deleteDoctor = async (id: string) => {
  const result = await Doctor.findByIdAndDelete(id);
  return result;
};

// Update doctor by ID
const updateDoctor = async (id: string, payload: Partial<IDoctor>) => {
  const result = await Doctor.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const doctorService = {
  createDoctor,
  getDoctors,
  getSingleDoctor,
  deleteDoctor,
  updateDoctor,
};
