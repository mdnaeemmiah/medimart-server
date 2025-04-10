import { Router } from 'express';
import { medicineController } from './addMedicine.controller';


const medicineRouter = Router();

// Route to get all medicines
medicineRouter.get('/', medicineController.getMedicines);

// Route to get a single medicine by ID
medicineRouter.get('/:medicineId', medicineController.getSingleMedicine);

// Route to create a new medicine
medicineRouter.post('/create', medicineController.createMedicine);

// Route to update an existing medicine by ID
medicineRouter.put('/:id', medicineController.updateMedicine);

// Route to delete a medicine by ID
medicineRouter.delete('/:id', medicineController.deleteMedicine);

export default medicineRouter;
