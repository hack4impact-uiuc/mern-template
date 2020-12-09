const express = require('express');

const router = express.Router();
const { home } = require('../api');

router.use('/api/home', home);

module.exports = router;
