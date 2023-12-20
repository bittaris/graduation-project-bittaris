const express = require('express')
const router = express.Router()
const User = require('../user')
const Product = require('../product')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const bunny = new User('bunny')
  const turtle = new User('turtle')
  const bouquetOne = new Product('Bouquet One', '10 Pink Peonies', '30€')
  const bouquetTwo = new Product('Bouquet Two', '20 Yellow Roses', '35€')
  const bouquetThree = new Product('Bouquet Three', '25 Carnations', '30€')
  bunny.addItem(bouquetOne)
  bunny.addItem(bouquetTwo)
  turtle.addItem(bouquetOne)
  turtle.addItem(bouquetThree)
  turtle.addItem(bouquetTwo)
  res.send([bunny, turtle])
})

module.exports = router
