'use strict';

module.exports = (DataTypes, DataTypes) => {
  var brand = DataTypes.define('brand', {
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
  };
  return brand;
};
