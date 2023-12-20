import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';

const getBoard = async (id) => {
  try {
    const url = `/boards/${id}`;

    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Detail Board: ${error.message}`);
  }
};

export function useGetBoard(id) {
  return useQuery(['getBoard' + id], () => getBoard(id), {
    onError: (error) => {
      showAlert('', '존재하지 않는 게시글입니다.', 'warning', () => {
        window.history.back();
      });
      console.error('Failed to fetch Detail Board:', error.message);
    },
  });
}
