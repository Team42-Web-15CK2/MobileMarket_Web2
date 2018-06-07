'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
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
    models.product.belongsTo(models.catalog, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.product.belongsTo(models.brand, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.product.hasMany(models.comment);
  };
  return product;
};
