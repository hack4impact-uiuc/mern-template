const express = require('express');
const router = express.Router();
const { errorWrap } = require('../middleware');
const { createResponse } = require('../utils');

// uncomment to use the schema
// const Home = require('../models/home');

router.get(
  '/',
  errorWrap(async (req, res) => {
    // MongoDB connection
    // const homeText = await Home.findOne();
    const homeText = "You've connected the database! Isn't it so beautiful???";

    // Template for formulating a successful API response
    const statusCode = 200;
    const responseBody = createResponse(
      statusCode,
      'Successfully returned home text',
      homeText,
    );
    res.status(statusCode).json(responseBody);
  }),
);

module.exports = router;
