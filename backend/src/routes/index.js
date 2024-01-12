var express = require('express')
var router = express.Router()

const User = require('../models/user')
const Address = require('../models/address')
const Order = require('../models/order')
const Product = require('../models/product')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Wildflower' })
})

// Avoids getting a ton of repetition on the database
router.get('/delete', async function (req, res, next) {
  await User.deleteMany()
  await Order.deleteMany()
  await Product.deleteMany()
  await Address.deleteMany()

  res.send('deleted')
})

module.exports = router
