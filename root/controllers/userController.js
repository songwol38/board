const User = require('D:/github/board/root/models/user');

// 회원가입
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 유효성 검사: 이메일과 비밀번호가 모두 제공되었는지 확인
    if (!email || !password) {
      return res.status(400).json({ error: '이메일과 비밀번호를 모두 입력해주세요.' });
    }

    // 데이터베이스에 사용자 생성
    const newUser = await User.create({
      email,
      password
    });

    // 회원가입 성공 시 201 Created 반환
    return res.status(201).json({ message: '사용자 생성 성공' });
  } catch (error) {
    console.error('회원가입 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

// 로그인
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 데이터베이스에서 이메일로 사용자 찾기
    const user = await User.findOne({ where: { email } });

    // 사용자가 없거나 비밀번호가 일치하지 않는 경우
    if (!user || user.password !== password) {
      return res.status(401).json({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' });
    }

    // 로그인 성공 시 200 OK 반환
    return res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    console.error('로그인 오류:', error.message);
    return res.status(500).json({ error: '서버 에러' });
  }
};

module.exports = {
  signUp,
  login
};