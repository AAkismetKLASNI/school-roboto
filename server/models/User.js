const mongoose = require('mongoose');
const validator = require('validator');
const ROLES = require('../constants/roles');
const GENDER = require('../constants/gender');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Невалидный Email',
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  telephone: {
    type: String,
    default: null,
  },
  role: {
    type: Number,
    default: ROLES.STUDENT,
  },
  gender: {
    type: String,
    default: GENDER.MAN,
  },
  purchases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Purchase',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
