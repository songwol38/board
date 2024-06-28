const express = require('express');
const router = express.Router();
const {
  createBoardPost,
  updateBoardPost,
  deleteBoardPost,
  getBoardPosts,
  getBoardPostsById,
  getBoardPostsByEmail
} = require('D:/github/board/root/controllers/boardController');

// 게시판 등록
router.post('/', createBoardPost);

// 게시판 수정
router.put('/:id', updateBoardPost);

// 게시판 삭제
router.delete('/:id', deleteBoardPost);

// 게시판 조회
router.get('/', getBoardPosts);

// 특정 유저 ID로 게시글 조회
router.get('/user/:id', getBoardPostsById);

// 특정 사용자 이메일로 게시글 조회
router.get('/user/email/:email', getBoardPostsByEmail);

module.exports = router;