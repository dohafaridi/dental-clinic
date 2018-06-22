import { Router } from 'express';
import * as ServiceController from '../controllers/service.controller';

const router = new Router();

// Get all Services
router.route('/services').get(ServiceController.getServices);

export default router;
