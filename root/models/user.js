const { DataTypes } = require('sequelize');
const sequelize = require('D:/github/board/root/config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, //기본키
    unique: true, //고유 필드
    autoIncrement: true // 자동 증가 설정
  },
  email: {
    type: DataTypes.STRING,
    unique: true //고유필드
  },
  passwd: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false
});

module.exports = User;