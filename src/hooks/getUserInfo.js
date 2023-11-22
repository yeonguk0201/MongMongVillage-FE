import { instance } from '.';
import { useMutation } from 'react-query';

const getUserInfo = async () => {
  const token = sessionStorage.getItem('token');
  const response = await instance.get(`/users/:userId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.data);
  return response;
};

export function useGetUserInfo() {
  return useMutation(() => getUserInfo(), {
    onSuccess: (response) => {},
    onError: (error) => {
      alert(error + '회원조회 실패');
    },
  });
}
