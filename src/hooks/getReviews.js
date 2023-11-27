import { instance } from '.';
import { useMutation } from 'react-query';

const getReviews = async () => {
  const response = await instance.get(`/reviews`);
  if (response?.data) return response.data;
};

export function useGetReviews() {
  return useMutation(() => getReviews(), {
    onSuccess: (response) => {},
    onError: (error) => {
      alert(error);
    },
  });
}
