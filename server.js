import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('API request'));

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port ${PORT} listening`));
