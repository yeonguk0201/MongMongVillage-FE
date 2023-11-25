import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const getUserInfo = async () => {
  const token = localStorage.getItem('token');
  const response = await instance.get(`/users/:userId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

export function useGetUserInfo() {
  const navigate = useNavigate();

  return useMutation(() => getUserInfo(), {
    onSuccess: (response) => {},
    onError: (error) => {
      alert(error.response.data.error + '회원조회를 할 수 없습니다.');
      navigate(ROUTE.MAIN_PAGE.link);
    },
  });
}
