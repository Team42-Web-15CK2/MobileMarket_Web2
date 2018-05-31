'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      account: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.INTEGER,
        values: 0
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
    return queryInterface.dropTable('users');
  }
};
