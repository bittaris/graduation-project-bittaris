const express = require('express')
const router = express.Router()
const Product = require('../models/product')

/* GET product listing. */
router.get('/', async function (req, res, next) {
  res.send(await Product.find())
})

/* /product/productId get specific product */
router.get('/:_id', async function (req, res, next) {
  const { _id } = req.params
  const product = await Product.findById(_id)

  if (!product) {
    return res.status(404).send('Product not found')
  }
  res.send(product)
})

/* (POST)Create a new product. */
router.post('/', async function (req, res, next) {
  const product = await Product.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  })
  res.send(product)
})

/* DELETE a product */
router.delete('/:itemId', async function (req, res, next) {
  const { itemId } = req.params
  const deletedProduct = await Product.findByIdAndDelete(itemId)

  if (!deletedProduct) {
    return res.status(404).send('Product not found')
  }

  res.status(200).send(deletedProduct)
})

module.exports = router
