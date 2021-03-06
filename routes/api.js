//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Router return
module.exports = router;