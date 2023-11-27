import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useQuery } from 'react-query';
import { ROUTE } from '../routes/Routes';

const getUserInfo = async () => {
  const response = await instance.get(`/users/:userId`);

  return response.data.data;
};

export function useGetUserInfo() {
  const navigate = useNavigate();

  return useQuery(['userInfo'], () => getUserInfo(), {
    onError: (error) => {
      alert(error.response.data.error + '회원조회를 할 수 없습니다.');
      navigate(ROUTE.MAIN_PAGE.link);
    },
  });
}
