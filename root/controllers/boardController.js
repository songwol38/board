const Board = require('D:/github/board/root/models/board');
const User = require('D:/github/board/root/models/user');

// 게시글 등록
const createBoardPost = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { title, content, user_id } = req.body;

    // 유효성 검사: 필드가 비어 있으면 400 Bad Request 반환
    if (!title || !content || !user_id) {
      return res.status(400).json({ error: '제목, 내용, 사용자 ID를 모두 입력해주세요.' });
    }

    // 사용자 ID가 존재하는지 확인
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: '해당 사용자를 찾을 수 없습니다.' });
    }

    // 데이터베이스에 게시글 생성
    const newPost = await Board.create({
      title,
      content,
      user_id
    });

    // 게시글 생성 성공 시 201 Created 반환
    return res.status(201).json({ message: '게시글 생성 성공', data: newPost });
  } catch (error) {
    console.error('게시글 등록 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 게시글 수정
const updateBoardPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    // 유효성 검사: 필드가 비어 있으면 400 Bad Request 반환
    if (!title || !content) {
      return res.status(400).json({ error: '제목과 내용을 모두 입력해주세요.' });
    }

    // 게시글 ID로 해당 게시글 찾기
    const boardPost = await Board.findByPk(id);
    if (!boardPost) {
      return res.status(404).json({ error: '해당 게시글을 찾을 수 없습니다.' });
    }

    // 데이터베이스에 게시글 수정
    await boardPost.update({
      title,
      content
    });

    // 게시글 수정 성공 시 200 OK 반환
    return res.status(200).json({ message: '게시글 수정 성공', data: boardPost });
  } catch (error) {
    console.error('게시글 수정 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 게시글 삭제
const deleteBoardPost = async (req, res) => {
  try {
    const { id } = req.params;

    // 게시글 ID로 해당 게시글 찾기
    const boardPost = await Board.findByPk(id);
    if (!boardPost) {
      return res.status(404).json({ error: '해당 게시글을 찾을 수 없습니다.' });
    }

    // 데이터베이스에서 게시글 삭제
    await boardPost.destroy();

    // 게시글 삭제 성공 시 200 OK 반환
    return res.status(200).json({ message: '게시글 삭제 성공' });
  } catch (error) {
    console.error('게시글 삭제 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 게시글 조회
const getBoardPosts = async (req, res) => {
  try {
    // 데이터베이스에서 모든 게시글 조회
    const boardPosts = await Board.findAll();

    // 조회 결과를 반환
    return res.status(200).json({ message: '게시글 목록 반환', data: boardPosts });
  } catch (error) {
    console.error('게시글 조회 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 특정 유저 ID로 게시글 조회
const getBoardPostsById = async (req, res) => {
  try {
    const { id } = req.params;

    // 유저 ID로 해당 유저의 게시글 조회
    const boardPosts = await Board.findAll({ where: { user_id: id } });

    // 조회 결과를 반환
    return res.status(200).json({ message: `유저 ID ${id}의 게시글 목록 반환`, data: boardPosts });
  } catch (error) {
    console.error('특정 유저 게시글 조회 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 이메일로 게시글 조회
const getBoardPostsByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // 이메일로 해당 사용자의 게시글 조회
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: '해당 이메일을 가진 사용자를 찾을 수 없습니다.' });
    }

    const boardPosts = await Board.findAll({ where: { user_id: user.id } }); // user.id로 수정

    // 조회 결과를 반환
    return res.status(200).json({ message: `${email}의 게시글 목록 반환`, data: boardPosts });
  } catch (error) {
    console.error('이메일로 게시글 조회 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

module.exports = {
  createBoardPost,
  updateBoardPost,
  deleteBoardPost,
  getBoardPosts,
  getBoardPostsById,
  getBoardPostsByEmail
};