'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.TEXT
      },
      email: {
        type: DataTypes.STRING
      },
      phonenumber: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.TEXT
      },
      account: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      isAdmin: {
        type: DataTypes.INTEGER,
        values: 0
      },
      token: {
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
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.comment);
    models.user.hasMany(models.order);
  };
  return user;
};
