const express = require('express');
const mapUser = require('../helpers/mapUser');
const { login, register } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.post('/login', async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password);

    res
      .cookie('token', token, { httpOnly: true })
      .send({ user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { user, token } = await register(req.body.email, req.body.password);

    res
      .cookie('token', token, { httpOnly: true })
      .send({ user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post('/logout', async (req, res) => {
  res.cookie('token', '', { httpOnly: true }).send({});
});

module.exports = router;
