'use strict';

module.exports = (sequelize, DataTypes) => {
  var brand = sequelize.define('brand', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  brand.associate = function(models) {
    // associations can be defined here
  };
  return brand;
};
