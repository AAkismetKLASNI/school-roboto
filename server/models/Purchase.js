const mongoose = require('mongoose');

const PurchaseSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  courseId: {
    type: String,
    required: true,
  },
  forWhat: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

module.exports = Purchase;
