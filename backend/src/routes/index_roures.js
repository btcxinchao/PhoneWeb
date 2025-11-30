const express = require('express')
const phoneRoutes = require('./phone_routes');
module.exports = (app) => {
  app.use('/api')
  app.use('/api/auth');
  app.use('/api/user');
}

