import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Olaa');
});

app.listen(4444);
