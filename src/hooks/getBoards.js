import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getBoards = async (currentPage, filteredCategory, sortBy) => {
  try {
    let url = '/boards';

    // category가 주어진 경우 카테고리에 따라 경로를 설정
    if (filteredCategory === 'all') {
      url += `?currentPage=${currentPage}`;
    } else {
      url += `/category/${filteredCategory}?currentPage=${currentPage}`;
    }

    // sort option에 따라 쿼리스트링으로 붙여줌
    if (sortBy === 'likes') {
      url += `&sortBy=likes`;
    }

    const response = await instance.get(url);

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Boards: ${error.message}`);
  }
};

export function useGetBoards(currentPage, filteredCategory, sortBy) {
  return useQuery(
    ['getBoards', currentPage, filteredCategory, sortBy],
    () => getBoards(currentPage, filteredCategory, sortBy),
    {
      keepPreviousData: true,
      retry: false,
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
