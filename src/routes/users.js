const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const bunny = new User('bunny')
  const turtle = new User('turtle')

  res.send([bunny, turtle])
})

module.exports = router
