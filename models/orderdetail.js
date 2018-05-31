'use strict';
module.exports = (sequelize, DataTypes) => {
  var orderdetail = sequelize.define('orderdetail', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_order: {
        type: DataTypes.INTEGER,
      },
      id_product: {
        type: DataTypes.INTEGER,
      },
      name_product: {
        type: DataTypes.STRING
      },
      price_product: {
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      total: {
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
  orderdetail.associate = function(models) {
    // associations can be defined here
  };
  return orderdetail;
};
