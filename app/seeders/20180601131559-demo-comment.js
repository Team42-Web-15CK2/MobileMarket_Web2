'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments',[{
      id:10,
      id_user:10,
      id_product:100,
      content:'i like this product',
      createdAt:d,
      updatedAt:d
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments',null,{});
  }
};
