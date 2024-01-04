const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

/* /user/username get specific user */
router.get('/:username', function (req, res, next) {
  const user = User.list.find(user => user.username === req.params.username)

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
router.delete('/:username', async function (req, res, next) {
  const { username } = req.params //instead of const username = req.params.username

  await User.findOneAndDelete({ username }) //instead of User.deleteUserbyUsername

  res.sendStatus(200)
})

// /users/userId/cart/items => post, add an item to the cart
router.post('/:username/cart/items', function (req, res, next) {
  const { username } = req.params
  const { itemTitle } = req.body

  const user = User.list.find(user => user.username === username)
  const item = Product.list.find(product => product.title == itemTitle)

  user.addItemToCart(item)

  res.send(user.cart)
})

// /users/userId/cart/items/itemId => delete, remove an item from the cart

router.delete('/:username/cart/items/:itemTitle', function (req, res, next) {
  const { username, itemTitle } = req.params

  const user = User.list.find(user => user.username === username)
  const item = Product.list.find(product => product.title == itemTitle)

  user.removeItem(item)

  res.send(user.cart)
})

module.exports = router
