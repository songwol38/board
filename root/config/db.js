const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'board_db',
    username: 'root',
    password: '0924',
    host: 'localhost',
    dialect: 'mysql', // 사용하는 데이터베이스 종류
    port: 3306, // MySQL 포트 번호 (기본값)
    logging: false, // 콘솔에 SQL 쿼리 출력 여부 (false로 설정하면 쿼리 출력을 비활성화할 수 있습니다)
  });

module.exports = sequelize;