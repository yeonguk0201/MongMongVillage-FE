import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const putUserInfo = async (nickname) => {
  const token = sessionStorage.getItem('token');
  const response = await instance.put(`/users/:userId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      nickname: nickname,
    },
  });
  console.log(response);
  return response;
};

export function usePutUserInfo(nickname) {
  const navigate = useNavigate();

  return useMutation(() => putUserInfo(nickname), {
    onSuccess: (response) => {
      navigate(ROUTE.MY_PAGE.link);
    },
    onError: (error) => {
      alert(error.response.data.error + '회원정보 수정을 할 수 없습니다.');
    },
  });
}
