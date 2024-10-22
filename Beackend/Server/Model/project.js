const { DataTypes } = require('sequelize');
const sequelize = require('../Config/config'); // your database connection

const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  startedat: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  endedat: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  tableName: 'projects',
  timestamps: false // Disable the createdAt and updatedAt fields
});


Project.sync({ force: true }) // This will drop and recreate the 'projects' table
  .then(() => {
    console.log('The projects table has been created!');
  })
  .catch(err => {
    console.error('Error syncing the projects table:', err);
  });
module.exports = Project;
