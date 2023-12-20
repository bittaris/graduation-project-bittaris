const express = require('express')
const router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const bunny = new User('bunny')
  res.send(bunny)
})

module.exports = router
