const express = require('express')
const PhoneRoutes = require('./phone_routes');
module.exports = (app) => {
    app.use('/api/user', PhoneRoutes);
}