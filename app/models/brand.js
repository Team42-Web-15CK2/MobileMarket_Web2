'use strict';

module.exports = (sequelize, DataTypes) => {
  var brand = sequelize.define('brand', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      code: {
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
  brand.associate = function(models) {
    // associations can be defined here
     models.brand.hasMany(models.product);
  };
  return brand;
};
