// ListModel.js
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: String,
  imgSrc: [String],
  rating: String,
  category: String,
  desc: String,
  price: String,
  data: String,
});

const List = mongoose.model('List', listSchema);

module.exports = List;
