const { verify } = require('../helpers/token');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  if (!req.cookies.token) {
    res.send({ error: 'Требуется авторизация' });
    return;
  }

  const tokenData = verify(req.cookies.token);

  const user = await User.findOne({ _id: tokenData });

  if (!user) {
    res.send({ error: 'Пользователь не опознан' });
    return;
  }

  res.user = user;

  next();
};
