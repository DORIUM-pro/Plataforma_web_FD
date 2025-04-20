'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuarios', 'reset_token', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('usuarios', 'reset_token_expira', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuarios', 'reset_token');
    await queryInterface.removeColumn('usuarios', 'reset_token_expira');
  }
};
