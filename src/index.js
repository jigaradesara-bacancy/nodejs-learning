const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
  });

app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


