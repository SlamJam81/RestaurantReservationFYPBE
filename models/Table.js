const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  seating: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  isReserved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Table', TableSchema);
