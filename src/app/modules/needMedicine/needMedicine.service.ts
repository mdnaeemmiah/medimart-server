
import { INeedMedicine } from "./needMedicine.intarface";
import { NeedMedicineModel } from "./needMedicine.model";

const createNeedMedicine = async (data: INeedMedicine) => {
  const result = await NeedMedicineModel.create(data);
  return result;
};

const getNeedMedicineById = async (id: string) => {
  const result = await NeedMedicineModel.findById(id);
  return result;
};

const getAllNeedMedicines = async () => {
  const result = await NeedMedicineModel.find();
  return result;
};

const updateNeedMedicine = async (id: string, data: Partial<INeedMedicine>) => {
  const result = await NeedMedicineModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteNeedMedicine = async (id: string) => {
  const result = await NeedMedicineModel.findByIdAndDelete(id);
  return result;
};

export const needMedicineService = {
  createNeedMedicine,
  getNeedMedicineById,
  getAllNeedMedicines,
  updateNeedMedicine,
  deleteNeedMedicine,
};
