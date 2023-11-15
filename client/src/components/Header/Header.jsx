import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Navbar,
  Navitem,
  LoginSignupMypage,
  Login,
  Signup,
  Mypage,
} from './styles';
import Logo from '../Logo/Logo';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate('/')} />
      <Navbar>
        <Navitem id="home" onClick={() => navigate('/')}>
          홈
        </Navitem>
        <Navitem id="community" onClick={() => navigate('/community')}>
          커뮤니티
        </Navitem>
        <Navitem id="review" onClick={() => navigate('/review')}>
          리뷰
        </Navitem>
        <Navitem id="information" onClick={() => navigate('/information')}>
          카페정보
        </Navitem>
      </Navbar>
      <LoginSignupMypage>
        <Login id="login" onClick={() => navigate('/login')}>
          로그인
        </Login>
        <Signup id="signup" onClick={() => navigate('/signup')}>
          회원가입
        </Signup>
        <Mypage id="mypage" onClick={() => navigate('/mypage')}>
          마이페이지
        </Mypage>
      </LoginSignupMypage>
    </Container>
  );
};

export default Header;
