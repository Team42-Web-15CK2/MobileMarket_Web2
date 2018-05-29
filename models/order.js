'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    id_user: DataTypes.INTEGER,
    totalprice: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};