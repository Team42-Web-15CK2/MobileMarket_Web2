var product = require('../models/product');
var DBManage = require('../database/DBManage');

function index(input = {}) {
  return new Promise(function(resovle, reject) {
    let sql = `Select * From products ${createWhereStatement(input)}`
    DBManage.executeQuery(sql, function(err, data) {
      if (err) {
        console.log(err.message)
        reject(err)
      }
      resovle(data)
    })
  })
};

