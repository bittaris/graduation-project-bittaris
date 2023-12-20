const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const bunny = new User('bunny')
  const bouquetOne = new Product('Bouquet One', '10 Pink Peonies', '30€')
  bunny.addItem(bouquetOne)
  res.send(bunny)
})

module.exports = router
