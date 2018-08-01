import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  cuid: { type: 'String', required: true },
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  sex: { type: 'String', required: true },
  birthDay: { type: 'Date', required: true },
  phone: { type: 'String', required: true },
  email: { type: 'String', required: true },
  address: { type: 'String', required: true },
  city: { type: 'String', required: true },
  maritalStatus: { type: 'String', required: true },
  company: { type: 'String', required: false },
  doctor: { type: 'String', required: true },
  insurance: { type: 'String', default: false, required: true },
  slug: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Patient', PatientSchema);
