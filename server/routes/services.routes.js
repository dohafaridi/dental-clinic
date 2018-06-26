import { Router } from 'express';
import * as ServiceController from '../controllers/service.controller';

const router = new Router();

// Get all services
router.route('/services').get(ServiceController.getServices);

// Get one service by slug
router.route('/services/:slug').get(ServiceController.getService);

// Add a new Service
router.route('/services').post(ServiceController.addService);

export default router;
