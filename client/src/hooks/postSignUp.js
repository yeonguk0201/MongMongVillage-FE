import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const postSignUp = async (email, password, nickname) => {
  const response = await instance.post(`/api/users/join`, {
    email,
    password,
    nickname,
  });

  return response;
};

export function usePostSignUp(email, password, nickname) {
  const navigate = useNavigate();

  return useMutation(() => postSignUp(email, password, nickname), {
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('/');
    },
    onError: (error) => {
      alert(error + '회원가입 실패');
    },
  });
}
