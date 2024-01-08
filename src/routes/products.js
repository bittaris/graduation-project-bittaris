const express = require('express')
const router = express.Router()
const Product = require('../models/product')

/* GET product listing. */
router.get('/', async function (req, res, next) {
  res.send(await Product.find())
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
router.delete('/:title', async function (req, res, next) {
  const productTitle = req.params.title
  console.log('productTitle: ', productTitle)
  const deletedProduct = await Product.findOneAndDelete({ title: productTitle })
  res.status(200).send(deletedProduct)
})

module.exports = router
