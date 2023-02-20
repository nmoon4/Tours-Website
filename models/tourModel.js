const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour needs name'],
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Tour needs price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
