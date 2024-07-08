const express = require('express');
const authenficated = require('../middlewares/authenficated');
const mapUser = require('../helpers/mapUser');

const { purchaseCourse, getPurchases } = require('../controllers/purchase');

const router = express.Router({ mergeParams: true });

router.post('/:id', authenficated, async (req, res) => {
  try {
    const user = await purchaseCourse(
      req.params.id,
      res.user.id,
      req.body.data
    );

    res.send({ user: mapUser(user) });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
