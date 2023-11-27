import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const patchUserInfo = async (nickname, introduction, profilePicture) => {
  const response = await instance.patch(`/users/:userId`, {
    nickname,
    introduction,
    profilePicture,
  });

  return response;
};

export function usePatchUserInfo(nickname, introduction, profilePicture) {
  const navigate = useNavigate();

  return useMutation(
    () => patchUserInfo(nickname, introduction, profilePicture),
    {
      onSuccess: () => {
        alert('회원 정보가 수정되었습니다.');
        navigate(ROUTE.MY_PAGE.link);
      },
      onError: (error) => {
        alert(error.response.data.error + '회원정보 수정을 할 수 없습니다.');
      },
    },
  );
}
