import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const deleteUser = async () => {
  const token = localStorage.getItem('token');
  const response = await instance.delete(`/users/:userId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export function useDeleteUser() {
  const navigate = useNavigate();

  return useMutation(() => deleteUser(), {
    onSuccess: (response) => {
      localStorage.removeItem('token');
      alert('회원 탈퇴 되었습니다.');
      navigate(ROUTE.MAIN_PAGE.link);
    },
    onError: (error) => {
      alert(error.message + '회원탈퇴 실패');
    },
  });
}
