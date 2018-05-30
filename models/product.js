'use strict';
var catalog = require('../models/catalog');
var brand = require('../models/brand');

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
    // foreign key from id_catalog to id in catalog
    models.product.belongsTo(catalog, {foreignKey:'fk_id_catalog', targetKey:'id'});
    // foreign key from id_brand to id in brand
    models.product.belongsTo(brand, {foreignKey:'fk_id_brand', targetKey:'id'});
  };
  return product;
};
