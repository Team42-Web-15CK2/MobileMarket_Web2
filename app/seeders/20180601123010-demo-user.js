'use strict';
var d=new Date();
d.setFullYear(1997,3,14);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[{
        id:10,
        name:'khoa',
        email:'khoa123@gmail.com',
        phonenumber:'0123456789',
        address:'123ddd',
        account:'khoa11',
        password:'123456',
        isAdmin:1,
        createdAt:d,
        updatedAt:d
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users',null,{});
  }
};
