const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true }, // để chứa "VNĐ"
  rate: { type: Number },
  location: { type: String }
});

module.exports = mongoose.model('Phone', phoneSchema);
