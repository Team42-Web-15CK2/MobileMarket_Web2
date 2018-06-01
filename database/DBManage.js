var pool = require('./mySQlConnector');

exports.executeQuery = function(query, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      if (connection) connection.release()
      callback(err)
      return
    }
    connection.query(query, function(err, rows) {
      connection.release()
      if (err) {
        callback(err)
      }
      callback(null, rows)
    })
    connection.on('error', function(err) {
      callback(err)
    })
  })
}

exports.executeQuery = function(query, data, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      if (connection) connection.release()
      callback(err)
      return
    }
    connection.query(query, data, function(err, rows) {
      connection.release()
      if (err) {
        callback(err)
      }
      callback(null, rows)
    })
    connection.on('error', function(err) {
      callback(err)
    })
  })
}
