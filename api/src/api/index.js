const express = require('express');
const router = express.Router();

router.use('/home', require('./home'));

module.exports = router;
