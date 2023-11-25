import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ROUTE } from '../routes/Routes';

const putReview = async (id, title, content, rating, images) => {
  const token = localStorage.getItem('token');

  const formData = new FormData();
  images.forEach((image) => {
    formData.append('images', image);
  });
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);

  const response = await instance.put(`/reviews/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // FormData를 사용하는 경우
    },
  });

  return response;
};

export function usePutReview(id, title, content, rating, images) {
  const navigate = useNavigate();
  return useMutation(() => putReview(id, title, content, rating, images), {
    onSuccess: (response) => {
      alert('리뷰가 수정되었습니다.');
      navigate(ROUTE.REVIEW_LIST_PAGE);
    },

    onError: (error) => {
      console.log(error);
      alert(error.response.data.message);
    },
  });
}
