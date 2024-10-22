module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('newuser', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'user'
    });
  },
  down: async (queryInterface, Sequelize) => {

  }
};
