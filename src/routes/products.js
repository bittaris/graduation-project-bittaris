const express = require('express')
const router = express.Router()
const Product = require('../product')

/* GET product listing. */
router.get('/', function (req, res, next) {
  res.send(Product.list)
})

/* (POST)Create a new product. */
router.post('/', function (req, res, next) {
  const product = Product.create({ title: req.body.title, description: req.body.description, price: req.body.price })
  res.send(product)
})

module.exports = router
