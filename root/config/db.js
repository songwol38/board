const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'board_db',
    username: 'root',
    password: '0924',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;