import { instance } from '.';
import { useQuery } from 'react-query';

const getTop100 = async () => {
  try {
    const response = await instance.get(`/cafes/top100`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch popular cafes: ${error.message}`);
  }
};

export function useGetTop100() {
  return useQuery(['top100'], getTop100, {
    onError: (error) => {
      console.error('Failed to fetch popular cafes:', error.message);
    },
  });
}
