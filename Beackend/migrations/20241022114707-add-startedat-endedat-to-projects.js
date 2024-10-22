'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('projects', 'startedat', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.addColumn('projects', 'endedat', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
