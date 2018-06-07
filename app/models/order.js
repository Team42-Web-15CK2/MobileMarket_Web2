'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      totalprice: {
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
  order.associate = function(models) {
    // associations can be defined here
    models.order.hasMany(models.orderdetail);
  };
  return order;
};
