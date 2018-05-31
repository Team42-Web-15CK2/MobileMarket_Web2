'use strict';
var catalog = require('../models/catalog');
var brand = require('../models/brand');

module.exports = (DataTypes, DataTypes) => {
  var product = DataTypes.define('product', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_catalog: {
        type: DataTypes.INTEGER,
      },
      id_brand: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT
      },
      image_url: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      price: {
        type: DataTypes.INTEGER
      },
      sold_quantity: {
        type: DataTypes.INTEGER
      },
      remaining_quantity: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
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
