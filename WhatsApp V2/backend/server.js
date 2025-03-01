import express from 'express';
import Data from './data.js';

const app = express();

app.get('/api/users', (req, res) => {
  res.send(Data.users);
});
app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
