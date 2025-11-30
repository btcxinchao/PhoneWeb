const mongoose= require('mongoose');
const Phone = require('../models/phone');



module.exports.phone = async (req, res) => {
  const dbPhone = await Phone.find();
  return res.status(200). json(dbPhone);
}