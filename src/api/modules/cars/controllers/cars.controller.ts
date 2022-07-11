import { Request, Response } from 'express';
import { Cars } from '../../../core/interfaces/cars.interface';

export const getCars = (req: Request, res: Response) => {
  res.send('Get Well done Cars!');
};

export const getCarsById = (req: Request, res: Response) => {
  const cars: Cars = {
    name: 'Carro 1 - Merc',
    id: '1',
  };
  res.send(cars);
};

export const getCarsStatusById = (req: Request, res: Response) => {
  const cars: Cars = {
    name: 'Carro 2 - Porc',
    id: '2',
  };
  res.send(cars);
};
