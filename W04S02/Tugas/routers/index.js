const express = require('express')
const router = express.Router()
const user = require('./user.router')
const provinces = require('./product.router')

router.use('/user', user)
router.use('/product', product)
module.exports = router