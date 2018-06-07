'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders',[{
      id:10,
      id_user:10,
      totalprice:10000000,
      createdAt:d,
      updatedAt:d
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders',null,{});
  }
};
