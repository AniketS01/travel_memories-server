const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connect = require('./db');
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');
const cors = require('cors');

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connect();

app.get('/', (req, res) => {
  res.send('server live ....');
});

app.use('/api/pins', pinRoute);
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  console.log('server live....');
});
