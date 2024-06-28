const { DataTypes } = require('sequelize');
const sequelize = require('D:/github/board/root/config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true // 자동 증가 설정
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  passwd: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false
});

module.exports = User;
