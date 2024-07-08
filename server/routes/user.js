const express = require('express');
const mapUser = require('../helpers/mapUser');
const authenficated = require('../middlewares/authenficated');
const { editUser } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.patch('/:id', authenficated, async (req, res) => {
  try {
    const user = await editUser(req.params.id, req.body.data);

    res.send({ user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get('/check-auth', authenficated, async (req, res) => {
  res.send({});
});

module.exports = router;
