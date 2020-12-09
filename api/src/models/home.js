const mongoose = require('mongoose');

const Home = new mongoose.Schema({
  text: { type: String },
});

module.exports = mongoose.model('Home', Home);
