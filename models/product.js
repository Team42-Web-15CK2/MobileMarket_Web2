'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    id_catalog: DataTypes.INTEGER,
    id_brand: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sold_quantity: DataTypes.INTEGER,
    remaining_quantity: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};