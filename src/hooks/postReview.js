import { instance } from '.';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const postReview = async (title, content, rating, images) => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  const response = await instance.post(
    `/reviews/`,
    { title, content, rating, images },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export function usePostReview(title, content, rating, images) {
  const navigate = useNavigate();
  return useMutation(() => postReview(title, content, rating, images), {
    onSuccess: (response) => {
      alert('리뷰 작성 성공');
    },

    onError: (error) => {
      console.log(error);
      alert(error);
    },
  });
}
