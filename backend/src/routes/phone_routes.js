const express = require('express');
const router = express.Router();
const phoneControl = require('../controllers/phone_control');
module.exports = (req,res) => {
  router.get('/phone', phoneControl.phone);
}


module.exports = router;