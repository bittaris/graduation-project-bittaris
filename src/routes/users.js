const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

/* /user/username get specific user */
router.get('/:username', async function (req, res, next) {
  const username = req.params.username
  const user = await User.findOne({ username })

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

// /users/userId/cart/items => post, add an item to the cart
router.post('/:username/cart/items', async function (req, res, next) {
  const { username } = req.params
  const { itemTitle } = req.body

  const user = await User.findOne({ username })
  const item = await Product.findOne({ title: itemTitle })

  await user.addItemToCart(item)

  res.send(user.cart)
})

// /users/userId/cart/items/itemId => delete, remove an item from the cart

router.delete('/:username/cart/items/:itemTitle', async function (req, res, next) {
  const { userId, objectId } = req.params

  const user = await User.findOne(userId)
  const item = await Product.findOne(objectId)

  await user.removeItem(item)

  res.send(user.cart)
})

module.exports = router
