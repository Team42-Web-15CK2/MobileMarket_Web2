var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.json([{
    id: 1,
    name: "samsepi0l"
  }, {
    id: 2,
    name: "D0loresH4ze"
  }]);
});

module.exports = router;
