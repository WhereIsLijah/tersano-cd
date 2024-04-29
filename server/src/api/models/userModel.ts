import mongoose from 'mongoose';

//User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    dateOfBirth: { type: Date }
  });

//User Model
const User = mongoose.model('User', userSchema);

export default User;