import express from 'express';
import userRouter from './api/routes/userRoute';
import productRouter from './api/routes/productRoute';
import dotenv from 'dotenv';
import db from './config/db';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);

db();

export default app;