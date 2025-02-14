const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/auth', authRoutes);

module.exports = app;
