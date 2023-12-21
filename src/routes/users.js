const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

/* (POST)Create a new user. */
router.post('/', function (req, res, next) {
  const user = User.create(req.body)
  res.send(user)
})

module.exports = router
