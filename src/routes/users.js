const express = require('express')
const router = express.Router()
const User = require('../user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const bunny = new User('bunny')
  res.send([{ username: bunny.username }])
})

module.exports = router
