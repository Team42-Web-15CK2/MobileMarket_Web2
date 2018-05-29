var express = require('express');
var router = express.Router();

/* product */
router.get('/product:id', function(req, res, next) {});
router.get('/product', function(req, res, next){});

/* catalog */
router.get('/catalog', function(req, res, next) {});

/* user */
router.get('/user:1', function(req, res, next){});
