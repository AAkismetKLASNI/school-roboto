const express = require('express');
const { getCourses, addCourse, getCourse } = require('../controllers/course');
const mapCourse = require('../helpers/mapCourse');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const courses = await getCourses(req.query.search);

  res.send({ courses: courses.map(mapCourse) });
});

router.post('/', async (req, res) => {
  const course = await addCourse(req.body.course);

  res.send({ course: mapCourse(course) });
});

router.get('/:id', async (req, res) => {
  const course = await getCourse(req.params.id);

  res.send({ course: mapCourse(course) });
});

module.exports = router;
