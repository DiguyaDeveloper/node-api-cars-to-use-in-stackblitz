import { Router } from 'express';
import cars from './cars';

const routes = Router();

routes.use('/cars', cars);

export default routes;
