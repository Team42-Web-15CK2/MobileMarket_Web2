'use strict';
module.exports = (sequelize, DataTypes) => {
  var catalog = sequelize.define('catalog', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      slug: {
        type: DataTypes.STRING
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
  catalog.associate = function(models) {
    // associations can be defined here
  };
  return catalog;
};
