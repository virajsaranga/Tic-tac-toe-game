const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');

app.use('/api/users', userRoutes); 
app.use('/api/game', gameRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
