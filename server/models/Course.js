const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  price: {
    type: Number,
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
  mode: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
