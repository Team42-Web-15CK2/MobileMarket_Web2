'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderdetails',[{
      id:10,
      id_order:10,
      id_product:100,
      name_product:'laptop1',
      price_product:10000000,
      quantity:2,
      total:20000000,
      createdAt:d,
      updatedAt:d
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderdetails',null,{});
  }
};
