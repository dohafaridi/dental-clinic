import { Router } from 'express';
import * as AppointmentController from '../controllers/appointment.controller';

const router = new Router();

// Get all appointments
router.route('/appointments').get(AppointmentController.getAppointments);

// Get one appointment by patientID
router.route('/appointments/:patientID').get(AppointmentController.getAppointment);

// Add a new Appointment
router.route('/appointments').post(AppointmentController.addAppointment);

// Edit a appointment by cuid
router.route('/appointments/:cuid').post(AppointmentController.editAppointment);

// Delete a appointment by cuid
router.route('/appointments/:cuid').delete(AppointmentController.deleteAppointment);

export default router;
