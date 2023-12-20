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
  const bouquetThree = new Product('Bouquet Three', '25 Pink Carnations', '30€')
  const bouquetFour = new Product('Bouquet Four', '15 Yellow Daffodils', '40€')
  const bouquetFive = new Product('Bouquet Five', '25 White Roses', '40€')
  bunny.addItem(bouquetOne)
  bunny.addItem(bouquetTwo)
  turtle.addItem(bouquetThree)
  turtle.addItem(bouquetFour)
  turtle.addItem(bouquetFive)

  res.send([bunny, turtle])
})

module.exports = router
