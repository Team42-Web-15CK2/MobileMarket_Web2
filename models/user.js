'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    address: DataTypes.STRING,
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};