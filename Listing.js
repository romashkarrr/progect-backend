
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  imgSrc: [String],
  rating: String,
  category: String,
  desc: String,
  price: String,
  data: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
