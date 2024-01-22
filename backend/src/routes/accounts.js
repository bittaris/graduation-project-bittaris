const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

/* GET my own session with cookies */
router.get('/session', async function (req, res, next) {
  res.send(req.user)
})

// Login
router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  res.send(req.user)
})

/* DELETE session aka logout */
router.delete('/session', async function (req, res, next) {
  await req.logout(function (err) {
    if (err) {
      return next(err)
    }
    req.session.regenerate(err => {
      if (err) next(err)
      res.sendStatus(200)
    })
  })
})

module.exports = router
