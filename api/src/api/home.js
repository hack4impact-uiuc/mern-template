const express = require('express');
const router = express.Router();
const { errorWrap } = require('../middleware');

// uncomment to use the schema
// const Home = require('../models/home');

router.get(
  '/',
  errorWrap(async (req, res) => {
    // MongoDB connection
    // const homeText = await Home.findOne();
    const homeText = "You've connected the database! Isn't it so beautiful???";
    res.status(200).json({
      message: `Successfully returned home text`,
      success: true,
      result: homeText,
    });
  }),
);

module.exports = router;
