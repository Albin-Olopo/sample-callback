// models/Callback.js

const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true
  },
  receivedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Callback', callbackSchema);
