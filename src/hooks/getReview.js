import { useNavigate } from 'react-router-dom';
import { instance } from '.';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const getReview = async (id) => {
  const response = await instance.get(`/reviews/${id}`);

  return response.data.data;
};

export function useGetReview(id) {
  const navigate = useNavigate();

  return useMutation(() => getReview(id), {
    onSuccess: (response) => {},
    onError: (error) => {
      alert('해당 리뷰 데이터가 존재하지 않습니다.');
      navigate(ROUTE.REVIEW_LIST_PAGE.link);
    },
  });
}
