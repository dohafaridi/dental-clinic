import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Service', ServiceSchema);
