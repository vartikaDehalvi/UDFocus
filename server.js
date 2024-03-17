import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
connectDB();

app.get('/', (req, res) => res.send('API request'));

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port ${PORT} listening`));
