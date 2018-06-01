'use strict';
var d=new Date();
d.setFullYear(1234,3,3);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products',[{
      id:100,
      id_catalog:10,
      id_brand:10,
      name:'Lap 102',
      image_url:'abc/xyz.jnp',
      description:'new lap top',
      price:10000000,
      sold_quantity:3,
      remaining_quantity:10,
      createdAt:d,
      updatedAt:d
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products',null,{});
  }
};
