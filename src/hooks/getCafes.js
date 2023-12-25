import { instance } from '.';
import { useQuery } from 'react-query';

const getCafes = async () => {
  try {
    const response = await instance.get(`/cafes`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch popular cafes: ${error.message}`);
  }
};

export function useGetCafes() {
  return useQuery(['cafes'], getCafes, {
    onError: (error) => {
      console.error('Failed to fetch popular cafes:', error.message);
    },
  });
}
