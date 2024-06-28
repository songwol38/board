const { DataTypes } = require('sequelize');
const sequelize = require('D:/github/board/root/config/db');
const User = require('D:/github/board/root/models/user');

const Board = sequelize.define('Board', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // 참조할 테이블 이름
      key: 'id' // 참조할 테이블의 기본 키
    }
  }
}, {
  timestamps: false
});

// 외래 키 설정
Board.belongsTo(User, {
  foreignKey: 'user_id', // 외래 키 필드명
  allowNull: false // 필수 필드임을 나타냄
});

module.exports = Board;