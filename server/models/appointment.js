import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  cuid: { type: 'String', required: true },
  reason: { type: 'String', required: true },
  appointmentDate: { type: 'Date', default: Date.now, required: true },
  appointmentHour: { type: 'string', required: true },
  patientID: { type: 'String', required: true, default: '5b6082a0bccc0d4aac848bea' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Appointment', AppointmentSchema);
