import express from 'express';
import userRouter from './api/routes/userRoute';
import productRouter from './api/routes/productRoute';
import dotenv from 'dotenv';
import db from './config/db';
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow all requests from this origin
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Further configurations and middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


app.use('/user', userRouter);
app.use('/product', productRouter);

db();

export default app;
