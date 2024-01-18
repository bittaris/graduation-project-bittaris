const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

/* GET my own session with cookies */
router.get('/session', async function (req, res, next) {
  res.send(req.session)
})

// Express application route middleware
router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  res.send(req.user)
})

module.exports = router
