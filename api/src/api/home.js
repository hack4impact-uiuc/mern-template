const express = require('express');
const router = express.Router();
const { errorWrap } = require('../middleware');

const Home = require('../models/home');

router.get(
  '/',
  errorWrap(async (req, res) => {
    // MongoDB connection
    // const homeText = await Home.findOne();
    const homeText = "You've connected the database! Isn't it so beautiful???";
    res.json({
      code: 200,
      message: `Successfully returned home text`,
      success: true,
      result: homeText,
    });
  }),
);

module.exports = router;
