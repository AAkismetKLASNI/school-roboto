const User = require('../models/User');
const { generate } = require('../helpers/token');
const bcrypt = require('bcrypt');

async function login(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Такого пользователя не существует');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Неверный пароль');
  }

  const token = generate({ id: user.id });

  await user.populate('purchases');

  return { user, token };
}

async function register(email, password) {
  if (!password) throw new Error('Нет пароля');

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: passwordHash });

  const token = generate({ id: user.id });

  return { user, token };
}

async function editUser(id, data) {
  const user = await User.findByIdAndUpdate({ _id: id }, data, {
    returnDocument: 'after',
  });

  return user;
}

module.exports = { login, register, editUser };
