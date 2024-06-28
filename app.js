const express = require('express');
const app = express();
const userRoutes = require('D:/github/board/root/routes/userRoutes');
const boardRoutes = require('D:/github/board/root/routes/boardRoutes');
const index = require('D:/github/board/root/routes/index')
const sequelize = require('D:/github/board/root/config/db');

// Middleware 설정
app.use(express.json());

// 라우트 설정
app.get('/', (req, res) => { res.send('나만의 게시판'); });
app.use('/users', userRoutes);
app.use('/boards', boardRoutes);
app.use('/check', index);

//데이터 베이스 연결 확인
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('MySQL 데이터베이스 연결 성공');
  } catch (error) {
    console.error('MySQL 데이터베이스 연결 실패:', error);
  }
}

connectDatabase();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});