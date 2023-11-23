import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AuthInput,
  Container,
  Img,
  SNSButton,
  TextButtonContainer,
  SubmitButton,
  SNSButtonContainer,
} from './styles';
import { Title } from '../../commonStyles';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { ROUTE } from '../../routes/Routes';
import { usePostLogin } from '../../hooks';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const { mutate } = usePostLogin(email, password);

  const submitLogin = () => {
    mutate();
  };

  const linkToSignup = () => {
    navigate(ROUTE.SIGNUP_PAGE.link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/logo.png`} />
      <Title>로그인</Title>

      <AuthInput
        placeholder="아이디(이메일)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        placeholder="비밀번호"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitButton onClick={submitLogin}>로그인</SubmitButton>

      <TextButtonContainer>
        <button>비밀번호 찾기</button>
        <span>|</span>
        <button onClick={linkToSignup}>회원가입</button>
      </TextButtonContainer>
      <SNSButtonContainer>
        <SNSButton className="google-login-button">
          <FcGoogle />
          <span>구글로 로그인</span>
          <span></span>
        </SNSButton>
        <SNSButton className="naver-login-button">
          <SiNaver />
          <span>네이버로 로그인</span>
          <span></span>
        </SNSButton>
      </SNSButtonContainer>
    </Container>
  );
};

export default LoginPage;
