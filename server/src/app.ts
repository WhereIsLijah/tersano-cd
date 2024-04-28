import express from 'express';
import userRouter from './routes/user';
import dotenv from 'dotenv';
import db from './config/db';

dotenv.config();
console.log('Port:', process.env.PORT);
console.log('MongoDB URL:', process.env.MONGODB_URL);

const app = express();
const PORT = 3000;
db()


app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', userRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
