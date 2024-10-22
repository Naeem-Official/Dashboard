const { DataTypes } = require('sequelize');
const sequelize = require('../Config/config'); 

// Define the 'PortfolioData' model
const PortfolioData = sequelize.define('PorfolioData', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  skills: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'PortfolioData', // Explicit table name
  timestamps: false     // Disable createdAt and updatedAt fields
});

// Sync the model with the database
PortfolioData.sync({ force: true }) // This will drop and recreate the table
  .then(() => {
    console.log('The PortfolioData table has been (re)created!');
  })
  .catch(err => {
    console.error('Error syncing the PortfolioData table:', err);
  });
module.exports = PortfolioData;
