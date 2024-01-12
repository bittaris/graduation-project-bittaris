const express = require('express')
const router = express.Router()
const Order = require('../models/order')
const User = require('../models/user')
const Address = require('../models/address')

/* GET orders listing. */
router.get('/', async function (req, res, next) {
  res.send(await Order.find())
})

/* /orders/orderId get specific order */
router.get('/:orderId', async function (req, res, next) {
  const { orderId } = req.params
  const order = await Order.findById(orderId)

  if (!order) {
    return res.status(404).send('Order not found')
  }

  res.send(order)
})

/* (POST) Create a new order. */
router.post('/', async function (req, res, next) {
  const deliveryAddress = await Address.create(req.body.deliveryAddress)
  const customer = await User.findById(req.body.customer)

  if (!customer) {
    return res.status(404).send('Customer not found')
  }

  const newOrder = await customer.placeOrder(deliveryAddress)

  res.send(newOrder)
})

module.exports = router
