const { DataTypes } = require('sequelize');
const sequelize = require('D:/github/board/root/config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, //기본키
    unique: true //고유 필드
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, //NULL 값 허용 안함
    unique: true //고유필드
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;