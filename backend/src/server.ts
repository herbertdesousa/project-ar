import 'express-async-errors';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import { errorMiddleware } from './middleware/error.middleware';
import { authRouter } from './routes/auth/auth.router';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});
app.use('/auth', authRouter);

app.use(errorMiddleware);

app.listen(3333, '192.168.15.9', () => {
  console.log('Server listening on port 3333');
});
