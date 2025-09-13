

import mongoose from 'mongoose';


const courseSchema = new mongoose.Schema({
   image: { type: String },
  startDate: { type: Date, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  availableSeats: { type: Number, required: true, default: 0 }
});

const cour = mongoose.model('Course', courseSchema);
export default cour;