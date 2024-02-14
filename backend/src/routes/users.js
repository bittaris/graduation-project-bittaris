const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Product = require('../models/product')
const { celebrate, Joi, errors, Segments } = require('celebrate')

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
router.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      type: Joi.string().valid('customer', 'owner').required(),
    }),
  }),
  async function (req, res, next) {
    const { firstName, lastName, email, password, type } = req.body

    const user = await User.register({ firstName, lastName, email, type }, password)

    res.send(user)
  }
)

// router.post('/', async function (req, res, next) {
//   const user = await User.create({
//     username: req.body.username,
//     cart: req.body.cart,
//   }) // this way the route handler ignores the other parameters and only sends name. Security concern.
//   res.send(user)
// })

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
router.post('/:userId/cart/products', async function (req, res, next) {
  const { userId } = req.params
  const { productId, quantity } = req.body

  const user = await User.findById(userId)
  const product = await Product.findById(productId)

  if (!user || !product) {
    res.sendStatus(404).send('User or product not found')
  }

  await user.addItemToCart(product, quantity)
  // Fetch updated user object from database
  const updatedUser = await User.findById(userId)

  res.send(updatedUser)
  //res.send(user.cart)
})

// /users/userId/cart/items/itemId => delete, remove an item from the cart

router.delete('/:userId/cart/products/:productId', async function (req, res, next) {
  console.log('req.params: ', req.params)
  const { userId, productId } = req.params
  const { quantity } = req.body

  const user = await User.findById(userId)
  const product = await Product.findById(productId)

  await user.removeItem(product, quantity)

  res.send(user.cart)
})

module.exports = router
