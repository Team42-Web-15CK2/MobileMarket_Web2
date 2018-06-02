var express = require('express');
var productController = require('../../controllers/productController');
var catalogController = require('../../controllers/catalogController');
var router = express.Router();
var sequelize =  require('../../database/mySQlConnector');
var model = require('../../models')

/*product*/
router.get('/product/:id', productController.showDetail)
// router.get('/new-product/:id', productController.showNew)
// router.get('/product/solding', productController.showBestSolding)
router.get('/product/catalog/:id_catalog', productController.showByCatalog)
router.get('/product/brand/:id_brand', productController.showByBrand)

/*catalog*/



module.exports = router;
