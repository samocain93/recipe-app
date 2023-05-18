import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => console.log('Server started on 3001'));
