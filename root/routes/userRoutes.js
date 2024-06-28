const express = require('express');
const router = express.Router();
const { signUp, login } = require('D:/github/board/root/controllers/userController');

// 회원가입
router.post('/signup', signUp);

// 로그인
router.post('/login', login);

module.exports = router;