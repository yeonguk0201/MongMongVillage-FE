import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postReview = async (title, content, rating, images) => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);

  const response = await instance.post(`/reviews/`, formData);

  return response;
};

export function usePostReview(title, content, rating, images) {
  const navigate = useNavigate();
  return useMutation(() => postReview(title, content, rating, images), {
    onSuccess: () => {
      alert('리뷰가 정상적으로 등록되었습니다.');
      navigate(ROUTE.REVIEW_LIST_PAGE.link);
    },

    onError: (error) => {
      console.log(error);
      alert(error.response.data.message);
    },
  });
}
