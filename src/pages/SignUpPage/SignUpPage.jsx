import { useState } from 'react';
import { SignUpCheckbox } from '../../components';
import {
  AuthInput,
  AuthInputContainer,
  CheckButton,
  Container,
  InputContainer,
  SubmitButton,
  Text,
} from './styles';
import { Title } from '../../commonStyles';
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
import { usePostSignUp } from '../../hooks';

import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

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

  const [checkboxInputStatus, setCheckboxInputStatus] = useState(
    InputStatus.DEFAULT,
  );

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const { mutate } = usePostSignUp(email, password, nickName);

  const submitSignUp = () => {
    if (emailInputStatus !== InputStatus.SUCCESS) {
      alert('이메일을 다시 확인해주세요.');
    } else if (passwordInputStatus !== InputStatus.SUCCESS) {
      alert('비밀번호 형식을 다시 확인해주세요.');
    } else if (confirmPasswordInputStatus !== InputStatus.SUCCESS) {
      alert('비밀번호가 일치하지 않습니다. ');
    } else if (nicknameInputStatus !== InputStatus.SUCCESS) {
      alert('닉네임을 다시 확인해주세요.');
    } else if (checkboxInputStatus !== InputStatus.SUCCESS) {
      alert('약관에 동의해주세요.');
    } else {
      mutate();
    }
  };

  return (
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
          success={emailInputStatus === InputStatus.SUCCESS ? 'true' : 'false'}
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
            type={hidePassword ? 'password' : 'text'}
            value={password}
            onChange={(e) =>
              PasswordValidCheck(e, setPassword, setPasswordInputStatus)
            }
            border="none"
          ></AuthInput>
          {hidePassword ? (
            <PiEyeBold onClick={() => setHidePassword(false)} />
          ) : (
            <PiEyeClosedBold onClick={() => setHidePassword(true)} />
          )}
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
          ></AuthInput>{' '}
          {hideConfirmPassword ? (
            <PiEyeBold onClick={() => setHideConfirmPassword(false)} />
          ) : (
            <PiEyeClosedBold onClick={() => setHideConfirmPassword(true)} />
          )}
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
      <SignUpCheckbox setCheckboxInputStatus={setCheckboxInputStatus} />
      <SubmitButton onClick={submitSignUp}>회원가입</SubmitButton>
    </Container>
  );
};

export default SignUpPage;
