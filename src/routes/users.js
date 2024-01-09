const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Product = require('../models/product')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

/* /user/userId get specific user */
router.get('/:userId', async function (req, res, next) {
  const { userId } = req.params
  const user = await User.findById(userId)

  if (!user) {
    return res.status(404).send('User not found')
  }

  res.send(user)
})

/* (POST)Create a new user. */
router.post('/', async function (req, res, next) {
  const user = await User.create({
    username: req.body.username,
    cart: req.body.cart,
  }) // this way the route handler ignores the other parameters and only sends name. Security concern.
  res.send(user)
})
/* DELETE a user */
router.delete('/:userId', async function (req, res, next) {
  const { userId } = req.params //instead of const username = req.params.username

  await User.findByIdAndDelete(userId) //instead of User.deleteUserbyUsername

  res.sendStatus(200)
})

// users/userId/cart - get the cart of a user
router.get('/:userId/cart', async function (req, res, next) {
  const { userId } = req.params
  const user = await User.findById(userId)

  if (!user) {
    res.sendStatus(404).send('User not found')
  }
  res.send(user.cart)
})

// /users/userId/cart/items => post, add an item to the cart
router.post('/:userId/cart/items', async function (req, res, next) {
  const { userId } = req.params
  const { itemId } = req.body

  const user = await User.findById(userId)
  const item = await Product.findById(itemId)

  if (!user || !item) {
    res.sendStatus(404).send('User or item not found')
  }

  await user.addItemToCart(item)

  res.send(user.cart)
})

// /users/userId/cart/items/itemId => delete, remove an item from the cart

router.delete('/:userId/cart/items/:itemId', async function (req, res, next) {
  const { userId, itemId } = req.params

  const user = await User.findById(userId)
  const item = await Product.findById(itemId)
  await user.removeItem(item)

  res.send(user.cart)
})

module.exports = router
