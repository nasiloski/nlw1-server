import express, { response } from 'express';
const routes = express.Router();

import PointsController from './controllers/pointsController'; 
const pointsController = new PointsController();

import ItemsController from './controllers/itemsController';
const itemsController = new ItemsController();

routes.get('/items', itemsController.show)
routes.post('/points', pointsController.create)

export default routes;