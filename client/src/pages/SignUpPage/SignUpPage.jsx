import { useState } from 'react';
import { Footer, Header, SignUpCheckbox } from '../../components';
import {
  AuthInput,
  AuthInputContainer,
  CheckButton,
  Container,
  InputContainer,
  SubmitButton,
  Title,
  Text,
} from './styles';
import {
  InputStatus,
  EmailValidCheck,
  SetMessage,
  EmailDuplicateCheck,
  NickNameValidCheck,
  NickNameDuplicateCheck,
  PasswordValidCheck,
  ConfirmPasswordValidCheck,
} from '../../libs';
import { PiEyeBold } from 'react-icons/pi';
import { PiEyeClosedBold } from 'react-icons/pi';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailInputStatus, setEmailInputStatus] = useState(InputStatus.DEFAULT);
  const [passwordInputStatus, setPasswordInputStatus] = useState(
    InputStatus.DEFAULT,
  );
  const [nicknameInputStatus, setNicknameInputStatus] = useState(
    InputStatus.DEFAULT,
  );
  const [confirmPasswordInputStatus, setConfirmPasswordInputStatus] = useState(
    InputStatus.DEFAULT,
  );

  const submitSignUp = () => {
    // if (emailInputStatus !== InputStatus.SUCCESS) {
    //   alert('이메일 형식을 다시 확인해주세요.');
    // } else if (passwordInputStatus !== InputStatus.SUCCESS) {
    //   alert('비밀번호 형식을 다시 확인해주세요.');
    // } else if (confirmPasswordInputStatus !== InputStatus.SUCCESS) {
    //   alert('비밀번호가 일치하지 않습니다. ');
    // } else if (nicknameInputStatus !== InputStatus.SUCCESS) {
    //   alert('닉네임 형식을 다시 확인해주세요.');
    // } else if (emailDuplicate !== InputStatus.SUCCESS) {
    //   alert('이메일 중복 확인을 해주세요.');
    // } else if (nicknameDuplicate !== InputStatus.SUCCESS) {
    //   alert('닉네임 중복 확인을 해주세요.');
    // } else {
    //   // 회원가입 api 호출
    //   alert('회원가입 성공! 환영합니다.');
    // }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <InputContainer>
          <AuthInputContainer border="none">
            <AuthInput
              placeholder="아이디(이메일)"
              value={email}
              onChange={(e) =>
                EmailValidCheck(e, email, setEmail, setEmailInputStatus)
              }
            ></AuthInput>
            <CheckButton
              onClick={(e) => EmailDuplicateCheck(setEmailInputStatus)}
              disabled={emailInputStatus !== InputStatus.CHECK_REQUIRED}
            >
              중복체크
            </CheckButton>
          </AuthInputContainer>
          <Text
            success={
              emailInputStatus === InputStatus.SUCCESS ? 'true' : 'false'
            }
          >
            {SetMessage('email', emailInputStatus)}
          </Text>
          <AuthInputContainer border="none">
            <AuthInput
              placeholder="닉네임"
              value={nickName}
              onChange={(e) =>
                NickNameValidCheck(
                  e,
                  nickName,
                  setNickName,
                  setNicknameInputStatus,
                )
              }
            ></AuthInput>
            <CheckButton
              onClick={(e) => NickNameDuplicateCheck(setNicknameInputStatus)}
              disabled={nicknameInputStatus !== InputStatus.CHECK_REQUIRED}
            >
              중복체크
            </CheckButton>
          </AuthInputContainer>
          <Text
            success={
              nicknameInputStatus === InputStatus.SUCCESS ? 'true' : 'false'
            }
          >
            {SetMessage('nickName', nicknameInputStatus)}
          </Text>
          <AuthInputContainer>
            <AuthInput
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) =>
                PasswordValidCheck(e, setPassword, setPasswordInputStatus)
              }
              border="none"
            ></AuthInput>
            <PiEyeBold color="gray" size={'20px'} />
          </AuthInputContainer>
          <Text
            success={
              passwordInputStatus === InputStatus.SUCCESS ? 'true' : 'false'
            }
          >
            {SetMessage('password', passwordInputStatus)}
          </Text>
          <AuthInputContainer>
            <AuthInput
              placeholder="비밀번호 확인"
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                ConfirmPasswordValidCheck(
                  e,
                  setConfirmPassword,
                  password,
                  setConfirmPasswordInputStatus,
                )
              }
              border="none"
            ></AuthInput>
            <PiEyeBold color="gray" size={'20px'} />
          </AuthInputContainer>
          <Text
            success={
              confirmPasswordInputStatus === InputStatus.SUCCESS
                ? 'true'
                : 'false'
            }
          >
            {SetMessage('confirmPassword', confirmPasswordInputStatus)}
          </Text>
        </InputContainer>
        <SignUpCheckbox />
        <SubmitButton onClick={submitSignUp}>회원가입</SubmitButton>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
