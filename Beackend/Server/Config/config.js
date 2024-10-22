const { Sequelize } = require('sequelize');

// Create a new Sequelize instance (connection)
const sequelize = new Sequelize('dashboard', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
