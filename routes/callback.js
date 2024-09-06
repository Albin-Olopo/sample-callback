// routes/callback.js

const express = require('express');
const router = express.Router();
const Callback = require('../models/Callback');

// POST route to accept callback data
router.post('/', async (req, res) => {
  try {
    const callbackData = new Callback({
      data: req.body // Save the entire request body as data
    });

    const savedCallback = await callbackData.save();

    res.status(201).json({
      message: 'Callback saved successfully',
      data: savedCallback
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to save callback',
      error: error.message
    });
  }
});

module.exports = router;
