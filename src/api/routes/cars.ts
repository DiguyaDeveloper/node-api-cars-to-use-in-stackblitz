import { Router } from 'express';
import {
  getCarsById,
  getCars,
  getCarsStatusById,
} from '../modules/cars/controllers/cars.controller';

const router = Router();

// Get all users
router.get('', getCars);
// Create Trainer
router.get('/:id', getCarsById);
// Get Trainer by id
router.get('/status/:id', getCarsStatusById);

export default router;
