import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  isOnHomePage: { type: 'Boolean', default: false, required: true },
  patientID: { type: 'String', required: true, default: 'admin' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Testimonial', TestimonialSchema);
