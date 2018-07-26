import { Router } from 'express';
import * as PatientController from '../controllers/patient.controller';

const router = new Router();

// Get all patients
router.route('/patients').get(PatientController.getPatients);

// Get one patient by slug
router.route('/patients/:slug').get(PatientController.getPatient);

// Add a new Patient
router.route('/patients').post(PatientController.addPatient);

// Edit a patient by cuid
router.route('/patients/:cuid').post(PatientController.editPatient);

// Delete a patient by cuid
router.route('/patients/:cuid').delete(PatientController.deletePatient);

export default router;
