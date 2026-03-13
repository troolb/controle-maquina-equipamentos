import express from 'express';
import { connectToDatabase } from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
