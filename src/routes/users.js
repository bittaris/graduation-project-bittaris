var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ firstName: 'Jules' }, { firstName: 'Hannah' }, { firstName: 'Penelope' }])
})

module.exports = router
