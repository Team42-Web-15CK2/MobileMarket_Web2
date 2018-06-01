'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('catalogs',[{
      id:10,
      name:'test',
      slug:'testing',
      createdAt:d,
      updatedAt:d
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('catalogs',null,{});
  }
};
