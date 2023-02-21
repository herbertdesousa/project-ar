import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'asdad' });
});

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
