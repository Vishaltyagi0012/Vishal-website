






import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: Number, default: null }, // 1 for admin
}, { timestamps: true });


const user = mongoose.model("users", userSchema);
export default user;