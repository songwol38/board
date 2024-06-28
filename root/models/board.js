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
      model: 'users',
      key: 'id'
    }
  }
}, {
  timestamps: false
});

Board.belongsTo(User, {
  foreignKey: 'user_id',
  allowNull: false
});

module.exports = Board;
