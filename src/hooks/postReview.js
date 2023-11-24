import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const postReview = async (title, content, rating, imageFile) => {
  const token = sessionStorage.getItem('token');

  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);

  const response = await instance.post(`/reviews/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우
    },
  });

  return response;
};

export function usePostReview(title, content, rating, images) {
  const navigate = useNavigate();
  return useMutation(() => postReview(title, content, rating, images), {
    onSuccess: (response) => {
      alert('리뷰 작성 성공');
      navigate(ROUTE.REVIEW_LIST_PAGE);
    },

    onError: (error) => {
      console.log(error);
      alert(error.response.data.message);
    },
  });
}
