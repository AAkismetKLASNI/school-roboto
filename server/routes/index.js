const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth'));
router.use('/users', require('./user'));
router.use('/courses', require('./course'));
router.use('/purchases', require('./purchase'));
router.use('/posts', require('./post'));

module.exports = router;
