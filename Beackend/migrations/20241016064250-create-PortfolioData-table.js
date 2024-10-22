'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('PortfolioData', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        phoneNo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        skills: {
          type: Sequelize.STRING,
          allowNull: false
        },
        projects: {
          type: Sequelize.STRING,
          allowNull: false
        }
      });
    },      

  async down (queryInterface, Sequelize) {
  
  }
};
