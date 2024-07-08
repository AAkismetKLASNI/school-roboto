const Course = require('../models/Course');

async function getCourses(search = '') {
  const courses = await Course.find({ forWhat: { $regex: search } });

  return courses;
}

async function addCourse(data) {
  const course = await Course.create(data);

  return course;
}

async function getCourse(id) {
  const course = await Course.findOne({ _id: id });

  return course;
}

module.exports = { getCourses, addCourse, getCourse };
