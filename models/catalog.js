'use strict';
module.exports = (sequelize, DataTypes) => {
  var catalog = sequelize.define('catalog', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  catalog.associate = function(models) {
    // associations can be defined here
  };
  return catalog;
};