module.exports = (course) => ({
  id: course._id,
  price: course.price,
  forWhat: course.forWhat,
  level: course.level,
  mode: course.mode,
  features: course.features,
});
