const Sequelize = require('sequelize');
const sequelize = new Sequelize('mobile_market_web2', 'root', null, {
  dialect: 'mysql',
  port: 3306,
  pool: { // If you want to override the options used for the read/write pool you can do so here
    max: 20,
    idle: 30000
  }
});

module.exports = sequelize;
