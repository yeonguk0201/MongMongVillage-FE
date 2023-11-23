import { instance } from '.';
import { useMutation } from 'react-query';

const getReviews = async () => {
  const response = await instance.get(`/reviews`, {});

  return response;
};

export function useGetReviews() {
  return useMutation(() => getReviews(), {
    onSuccess: (response) => {},
    onError: (error) => {
      alert(error.response.data.error);
    },
  });
}
