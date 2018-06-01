var express = require('express');
var model = require('../../models');
var router = express.Router();

/* Catalog. */
router.get('/catalog', catalogController.index);
router.get('/catalog/:id', catalogController.show);
router.post('/catalog', catalogController.store);
router.put('/catalog/:id', catalogController.update);
router.delete('/catalog/:id', catalogController.delete);

/* Product */
router.get('/product', productController.index);
router.get('/product/:id', productController.show);
router.post('/product', productController.store);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

/* User */
router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.store);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

/* transaction */
router.get('/transaction', transactionController.index);
router.get('/transaction/:id', transactionController.show);
router.post('/transaction', transactionController.store);
router.put('/transaction/:id', transactionController.update);
router.delete('/transaction/:id', transactionController.delete);

/* order */
router.get('/order', orderController.index);
router.get('/order/:id', orderController.show);
router.post('/order', orderController.store);
router.put('/order/:id', orderController.update);
router.delete('/order/:id', orderController.delete);


module.exports = router;
