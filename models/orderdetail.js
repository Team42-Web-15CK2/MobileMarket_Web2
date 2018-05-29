'use strict';
module.exports = (sequelize, DataTypes) => {
  var orderdetail = sequelize.define('orderdetail', {
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    name_product: DataTypes.STRING,
    price_product: DataTypes.INT,
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  orderdetail.associate = function(models) {
    // associations can be defined here
  };
  return orderdetail;
};