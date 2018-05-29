'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      name_product: {
        type: Sequelize.STRING
      },
      price_product: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderdetails');
  }
};
