import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  userName: { type: 'String', required: true },
  password: { type: 'String', required: true },
  isActiveAccount: { type: 'Boolean', default: true, required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  patientID: { type: 'String', required: true, default: '5b6082a0bccc0d4aac848bea' },
});

export default mongoose.model('Account', AccountSchema);
