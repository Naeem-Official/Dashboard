const { DataTypes } = require('sequelize');
const sequelize = require('../Config/config'); // Import the connection

// Define the 'newuser' model
const NewUser = sequelize.define('NewUser', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user'  // Default role is 'user'
  }
}, {
  tableName: 'newuser', // Explicit table name
  timestamps: false     // Disable createdAt and updatedAt fields
});

// Sync the model with the database
NewUser.sync()
  .then(() => {
    console.log('The table for NewUser model was just (re)created!');
  })
  .catch((err) => {
    console.error('Error creating the NewUser table:', err);
  });

module.exports = NewUser;
