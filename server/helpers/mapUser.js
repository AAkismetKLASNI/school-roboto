const mapPurchase = require('./mapPurchase');

module.exports = (user) => ({
  id: user._id,
  email: user.email,
  firstname: user.firstname,
  lastname: user.lastname,
  telephone: user.telephone,
  roleId: user.role,
  gender: user.gender,
  purchases: user.purchases.map(mapPurchase),
});
