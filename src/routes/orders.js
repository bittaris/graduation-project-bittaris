const express = require('express')
const router = express.Router()
const Order = require('../models/order')
const User = require('../models/user')
const Address = require('../models/address')

/* GET orders listing. */
router.get('/', async function (req, res, next) {
  res.send(await Order.find())
})

/* (POST) Create a new order. */
router.post('/', async function (req, res, next) {
  const deliveryAddress = await Address.create(req.body.deliveryAddress)
  const customer = await User.findOne({ username: req.body.customer })
  const newOrder = await customer.placeOrder(deliveryAddress)

  res.send(newOrder)
})

module.exports = router
