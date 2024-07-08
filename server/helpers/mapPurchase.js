const mapUser = require('./mapUser');

module.exports = (purchase) => ({
  id: purchase._id,
  user: purchase.user,
  forWhat: purchase.forWhat,
  level: purchase.level,
  price: purchase.price,
  courseId: purchase.courseId,
});
