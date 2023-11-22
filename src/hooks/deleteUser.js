import { instance } from '.';
import { useMutation } from 'react-query';

const deleteUser = async () => {
  const token = sessionStorage.getItem('token');
  const response = await instance.delete(`/users/:userId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export function useDeleteUser() {
  return useMutation(() => deleteUser(), {
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      alert(error.message + '회원탈퇴 실패');
    },
  });
}
