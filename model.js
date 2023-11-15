const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  title: String,
  imgSrc: [String],
  rating: String,
  category: String,
  desc: String,
  price: String,
  data: String,
});

// Змініть 'Link' на бажану назву колекції, наприклад, 'Picture'
const Picture = mongoose.model('Picture', linkSchema);

module.exports = Picture;
