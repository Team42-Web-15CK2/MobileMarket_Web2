var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function(req, res, next) {
    // http://localhost:3000/user/profile Send header Authorization:bearer token
    res.json(req.user);
});

module.exports = router;