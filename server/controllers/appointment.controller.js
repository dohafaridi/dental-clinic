import Appointment from '../models/appointment';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all appointments
 * @param req
 * @param res
 * @returns void
 */
export const getAppointments = (req, res) =>
  Appointment.find()
    .sort('-dateAdded')
    .exec(
      (err, appointments) =>
        (err ? res.status(500).send(err) : res.json({ appointments }))
    );

/**
 * Get appointments by patientID
 * @param req
 * @param res
 * @returns void
 */
export const getAppointmentsByPatientID = (req, res) =>
  Appointment.find({ patientID: req.params.patientID }).exec(
    (err, appointments) => (err ? res.status(500).send(err) : res.json({ appointments }))
  );

/**
 * Save a appointment
 * @param req
 * @param res
 * @returns void
 */
export const addAppointment = (req, res) => {
  if (!req.body.appointment.reason || !req.body.appointment.appointmentDate || !req.body.appointment.appointmentHour) {
    res.status(403).end();
  }

  const newAppointment = new Appointment(req.body.appointment);

  newAppointment.reason = sanitizeHtml(newAppointment.reason);
  newAppointment.appointmentDate = newAppointment.appointmentDate;
  newAppointment.appointmentHour = sanitizeHtml(newAppointment.appointmentHour);

  newAppointment.cuid = cuid();
  newAppointment.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ appointment: saved }))
  );
};

/**
 * Delete a appointment
 * @param req
 * @param res
 * @returns void
 */
export const deleteAppointment = (req, res) => {
  Appointment.findOne({ cuid: req.params.cuid }).exec((err, appointment) => {
    if (err) {
      res.status(500).send(err);
    }

    appointment.remove(() => {
      res.status(200).end();
    });
  });
};

/**
 * Edit a appointment
 * @param req
 * @param res
 * @returns void
 */
export const editAppointment = (req, res) => {
  const query = { cuid: req.params.cuid };
  const newValues = {
    $set: {
      reason: req.body.appointment.reason,
      appointmentDate: req.body.appointment.appointmentDate,
      appointmentHour: req.body.appointment.appointmentHour,
    },
  };
  Appointment.findOneAndUpdate(
    query,
    newValues,
    (err, saved) =>
      (
        err
        ? res.status(500).send(err)
        : res.json({ appointment: Object.assign(saved, {}, newValues.$set) })
      )
  );
};
