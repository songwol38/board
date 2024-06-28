const { DataTypes } = require('sequelize');
const sequelize = require('D:/github/board/root/config/db');
const User = require('D:/github/board/root/models/user'); // User 모델 불러오기

const Board = sequelize.define('Board', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// 외래 키 설정
Board.belongsTo(User, {
  foreignKey: 'id', // 외래 키 필드명
  allowNull: false // 필수 필드임을 나타냄
});

module.exports = Board;