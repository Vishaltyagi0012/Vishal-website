




import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    city: { type: String, required: true },
    subject:{ type: String, required: true },
    address: { type: String, required: true }
});

const user = mongoose.model("contact", contactSchema);
export default user;