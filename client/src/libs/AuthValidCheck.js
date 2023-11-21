import { InputStatus } from './AuthMessage';

export const EmailValidCheck = (e, status, setValue, setStatus) => {
  setValue(e.target.value);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // 이메일 정규표현식
  if (!emailRegex.test(e.target.value)) {
    // 이메일 형식이 아니면 -> erorr
    setStatus(InputStatus.ERROR);
  } else if (status !== InputStatus.SUCCESS) {
    // 이메일 형식이 맞으면 -> check-required
    setStatus(InputStatus.CHECK_REQUIRED);
  }
};

export const EmailDuplicateCheck = (setStatus) => {
  // 이메일 중복체크 api 호출
  setStatus(InputStatus.SUCCESS); // 중복이 아닌 상태로 수정
};

export const NickNameDuplicateCheck = (setStatus) => {
  // 닉네임 중복체크 api 호출
  setStatus(InputStatus.SUCCESS); // 중복이 아닌 상태로 수정
};

export const NickNameValidCheck = (e, status, setValue, setStatus) => {
  setValue(e.target.value);

  if (e.target.value.length < 2) {
    // 2글자 미만이면 -> erorr
    setStatus(InputStatus.ERROR);
  } else if (status !== InputStatus.SUCCESS) {
    // 2글자 이상이면 -> check-required
    setStatus(InputStatus.CHECK_REQUIRED);
  }
};

export const PasswordValidCheck = (e, setValue, setStatus) => {
  setValue(e.target.value);

  if (e.target.value.length < 6) {
    // 6글자 미만이면 -> erorr
    setStatus(InputStatus.ERROR);
  } else {
    // 6글자 이상이면 -> success
    setStatus(InputStatus.SUCCESS);
  }
};

export const ConfirmPasswordValidCheck = (
  e,
  setValue,
  inputPassword,
  setStatus,
) => {
  setValue(e.target.value);

  if (e.target.value !== inputPassword) {
    // 비밀번호가 다르면 -> error
    setStatus(InputStatus.ERROR);
  } else {
    // 비밀번호가 같으면 -> success
    setStatus(InputStatus.SUCCESS);
  }
};
