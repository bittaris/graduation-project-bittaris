const express = require('express')
const router = express.Router()
const Order = require('../order')
const User = require('../user')

/* GET orders listing. */
router.get('/', function (req, res, next) {
  res.send(Order.list)
})

/* (POST) Create a new order. */
router.post('/', function (req, res, next) {
  const deliveryAddress = req.body.deliveryAddress
  const customer = User.list.find(user => user.username === req.body.customer)

  const newOrder = customer.placeOrder(deliveryAddress)

  res.send(newOrder)
})

module.exports = router
