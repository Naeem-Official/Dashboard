'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PortfolioData', 'projects');
  },
  down: async (queryInterface, Sequelize) => {
  
  }
};
