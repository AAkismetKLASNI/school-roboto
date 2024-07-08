const User = require('../models/User');
const Purchase = require('../models/Purchase');

async function purchaseCourse(courseId, userId, data) {
  const purchase = await Purchase.create({ user: userId, ...data, courseId });

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $push: { purchases: purchase },
    },
    {
      returnDocument: 'after',
    }
  );

  return user.populate('purchases');
}

async function getPurchases(userId) {
  const purchases = await Purchase.find({ user: userId });

  return purchases;
}

module.exports = { purchaseCourse, getPurchases };
