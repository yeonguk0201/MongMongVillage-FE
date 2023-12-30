import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getBoards = async (page, category, sort) => {
  try {
    let url = '/boards';

    // category가 주어진 경우 카테고리에 따라 경로를 설정
    if (category === 'all') {
      url += `?currentPage=${page}`;
    } else {
      url += `/category/${category}?currentPage=${page}`;
    }

    // sort option에 따라 쿼리스트링으로 붙여줌
    if (sort === 'likes') {
      url += `&sortBy=likes`;
    }

    const response = await instance.get(url);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Boards: ${error.message}`);
  }
};

export function useGetBoards(page, category, sort) {
  return useQuery(
    ['getBoards', page, category, sort],
    () => getBoards(page, category, sort),
    {
      keepPreviousData: true,
      onError: (error) => {
        showAlert(
          '',
          error.message + '게시글 목록을 불러올 수 없습니다.',
          'error',
          () => {
            window.history.back();
          },
        );
      },
    },
  );
}
