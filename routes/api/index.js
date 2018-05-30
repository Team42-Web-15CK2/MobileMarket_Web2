var express = require('express');
var model = require('../models');
var router = express.Router();

/* product */
/*get all product */
router.get('/product', function(req, res, next){
  model.product.findAll();
});

/* catalog */
router.get('/catalog', function(req, res, next) {});

/* user */
router.get('/user:1', function(req, res, next){});
