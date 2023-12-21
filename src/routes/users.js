const express = require('express')
const router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

/* (POST)Create a new user. */
router.post('/', function (req, res, next) {
  const user = User.create({ username: req.body.username }) // this way the route handler ignores the other parameters and only sends name. Security concern.
  res.send(user)
})

module.exports = router
