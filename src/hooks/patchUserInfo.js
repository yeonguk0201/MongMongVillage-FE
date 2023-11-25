import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchUserInfo = async (nickname, introduction) => {
  const token = localStorage.getItem('token');
  const response = await instance.patch(
    `/users/:userId`,
    {
      nickname,
      introduction,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePatchUserInfo(nickname, introduction) {
  const navigate = useNavigate();

  return useMutation(() => patchUserInfo(nickname, introduction), {
    onSuccess: (response) => {
      navigate(ROUTE.MY_PAGE.link);
    },
    onError: (error) => {
      alert(error.response.data.error + '회원정보 수정을 할 수 없습니다.');
    },
  });
}
