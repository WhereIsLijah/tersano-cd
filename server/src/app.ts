import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './api/routes/userRoute';
import productRouter from './api/routes/productRoute';
import db from './config/db';

dotenv.config(); 

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRouter);
app.use('/product', productRouter);


db();

export default app;
