import mongoose from 'mongoose';


// Authentication Model
const authSchema = new mongoose.Schema({
    emailOrUsername: { type: String, required: true },
    password: { type: String, required: true }
  });
  
  const Authentication = mongoose.model('Authentication', authSchema);
  
  export default Authentication;