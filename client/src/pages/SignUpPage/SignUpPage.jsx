import { Footer, Header } from '../../components';
import {
  AuthInput,
  AuthInputContainer,
  CheckButton,
  Container,
  InputContainer,
  SubmitButton,
  Title,
} from './styles';

const SignUpPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>이메일로 회원가입</Title>
        <InputContainer>
          <AuthInputContainer>
            <AuthInput placeholder="이메일"></AuthInput>
            <CheckButton>중복체크</CheckButton>
          </AuthInputContainer>
          <AuthInputContainer>
            <AuthInput placeholder="닉네임"></AuthInput>
            <CheckButton>중복체크</CheckButton>
          </AuthInputContainer>
          <AuthInput placeholder="비밀번호"></AuthInput>
          <AuthInput placeholder="비밀번호 확인"></AuthInput>
          <SubmitButton>회원가입</SubmitButton>
        </InputContainer>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
