const express = require('express');
const router = express.Router();
const db = require('D:/github/board/root/config/db'); // 데이터베이스 설정 파일

// GET /users: 모든 사용자 조회
router.get('/users', async (req, res, next) => {
    try {
        const users = await db.User.findAll(); // User 모델에서 모든 사용자 조회
        res.json(users); // JSON 형태로 사용자 목록 응답
    } catch (error) {
        next(error); // 에러 처리 미들웨어로 전달
    }
});

module.exports = router;