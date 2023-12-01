import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getMyLike = async () => {
  try {
    const response = await instance.get(`/boards/mypage/user/liked`);
    if (response.data?.liked) return response.data.liked;
  } catch (error) {
    throw error;
  }
};

export function useGetMyLike() {
  const userId = localStorage.getItem('userId');

  return useQuery(['myLike'], () => getMyLike(), {
    enabled: !!userId,
    retry: false,
    onError: (error) => {
      showAlert(
        '',
        error + '내 좋아요 조회를 할 수 없습니다.',
        'error',
        () => {},
      );
    },
  });
}
