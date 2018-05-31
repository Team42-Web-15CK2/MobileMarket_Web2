var express = require('express');
var model = require('../../models');
var router = express.Router();

/* home */

/* product */
/*get all product */
router.get('/product', function(req, res, next){
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

module.exports = router;
