const express = require('express');
const router = express.Router();
const User = require('D:/github/board/root/models/user'); // 데이터베이스 설정 파일

router.get('/users', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        next(error); // 에러 처리 미들웨어로 전달
    }
});

module.exports = router;
