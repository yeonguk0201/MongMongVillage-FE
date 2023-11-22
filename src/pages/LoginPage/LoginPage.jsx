import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AuthInput,
  Container,
  Img,
  SNSButton,
  TextButton,
  TextButtonContainer,
  SubmitButton,
  Title,
} from './styles';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { ROUTE } from '../../routes/Routes';
import { usePostLogin } from '../../hooks';

const LoginPage = () => {
  const navigate = useNavigate();
  const [toggleEmailLogin, setToggleEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const toggle = () => {
    setToggleEmailLogin(!toggleEmailLogin);
  };

  const hideEmailLogin = () => {
    setToggleEmailLogin(false);
  };

  const { mutate } = usePostLogin(email, password);

  const submitLogin = () => {
    mutate();
  };

  return (
    <Container>
      <Img src={`${process.env.PUBLIC_URL}/logo.png`} />
      <Title>로그인</Title>
      <SNSButton className="google-login-button" onClick={hideEmailLogin}>
        <FcGoogle />
        <span>구글로 로그인</span>
        <span></span>
      </SNSButton>
      <SNSButton className="naver-login-button" onClick={hideEmailLogin}>
        <SiNaver />
        <span>네이버로 로그인</span>
        <span></span>
      </SNSButton>
      {toggleEmailLogin && (
        <>
          <AuthInput
            placeholder="아이디(이메일)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            placeholder="비말번호"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <SubmitButton onClick={submitLogin}>로그인</SubmitButton>
        </>
      )}
      {!toggleEmailLogin && (
        <SNSButton className="email-login-button" onClick={toggle}>
          이메일로 로그인
        </SNSButton>
      )}

      <TextButtonContainer>
        <TextButton>비밀번호 찾기</TextButton>
        <span>|</span>
        <TextButton onClick={() => navigate(ROUTE.SIGNUP_PAGE.link)}>
          회원가입
        </TextButton>
      </TextButtonContainer>
    </Container>
  );
};

export default LoginPage;
