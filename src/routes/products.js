const express = require('express')
const router = express.Router()
const Product = require('../product')

/* GET products listing. */
router.get('/', function (req, res, next) {
  const bouquetOne = new Product('Bouquet One', '10 Pink Peonies', '30€')
  const bouquetTwo = new Product('Bouquet Two', '20 Yellow Roses', '35€')
  const bouquetThree = new Product('Bouquet Three', '25 Pink Carnations', '30€')
  const bouquetFour = new Product('Bouquet Four', '15 Yellow Daffodils', '40€')
  const bouquetFive = new Product('Bouquet Five', '25 White Roses', '40€')

  res.send([bouquetOne, bouquetTwo, bouquetThree, bouquetFour, bouquetFive])
})

module.exports = router
