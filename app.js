const express = require('express');
const app = express();
const userRoutes = require('./root/routes/userRoutes');
const boardRoutes = require('./root/routes/boardRoutes');

// Middleware 설정
app.use(express.json());

// 라우트 설정
app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});