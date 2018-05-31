var express = require('express');
var model = require('../models');
var router = express.Router();

/* home */
router.get('/home',function());
/* product */
/*get all product */
router.get('/product', function(req, res, next){
  model.product.findAll({
    attributes: ['id','id_catalog','id_brand','name', 'image_url', 'desciption', 'price','sold_quantity','remaining_quantity','createdAt','updatedAt']
  })
  .then(products => { res.json(products));
});

/* catalog */
router.get('/catalog', function(req, res, next) {
  model.catalog.findAll({
    attributes: ['id','name','slug','createdAt','updatedAt']
  })
  .then(catalogs => res.json(catalogs));
});

/* brand */
router.get('/brand', function(req, res, next) {
  model.catalog.findAll({
    attributes: ['id','name','code','createdAt','updatedAt']
  })
  .then(brands => res.json(brands));
});

/* user */
router.get('/user:1', function(req, res, next){});
