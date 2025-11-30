
const express = require('express');
const router = express.Router();

const phoneControl = require('../controllers/phone_control');

// GET /api/phone
router.get('/phone', phoneControl.phone);

module.exports = router;
