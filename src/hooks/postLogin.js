import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const postLogin = async (email, password) => {
  const response = await instance.post(`/users/login`, {
    email,
    password,
  });

  console.log(response.data);
  return response;
};

export function usePostLogin(email, password) {
  const navigate = useNavigate();
  return useMutation(() => postLogin(email, password), {
    onSuccess: (response) => {
      const token = response.data.data;
      sessionStorage.setItem('token', token);

      alert('로그인 성공');
      navigate('/');
    },
    onError: (error) => {
      alert(error + '로그인 실패');
    },
  });
}
