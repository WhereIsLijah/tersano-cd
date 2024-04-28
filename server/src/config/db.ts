import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL!;

const db = async() => {
    try {
        console.log("Connecting to MongoDB with URI: ", MONGODB_URL);
        const con = await mongoose.connect( MONGODB_URL );
        console.log(`DB: MongoDB Connected ${con.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}

export default db;