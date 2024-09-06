// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('express').json();
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const callbackRoute = require('./routes/callback');

// Use routes
app.use('/api/notifications', callbackRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
