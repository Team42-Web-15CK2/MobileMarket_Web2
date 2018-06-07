'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('brands',[{
     id:10,
     name:'honda',
     code:'honda',
     createdAt:d,
     updatedAt:d
   }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands',null,{});
  }
};
