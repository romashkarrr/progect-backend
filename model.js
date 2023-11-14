const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  label: String,
  imgSrc: String,
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
