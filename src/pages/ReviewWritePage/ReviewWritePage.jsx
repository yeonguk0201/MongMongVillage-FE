import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  ReviewWriteContainer,
  Text,
  InputImg,
  ReviewTitleInput,
  InputContainer,
  ReviewText,
  InputImgButton,
  SubmitButton,
  CafeName,
} from './styles';

import { FaCamera, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { ReviewWriteRating } from '../../components';
import { usePostReview, usePutReview } from '../../hooks';

const ReviewWritePage = () => {
  const [prevReview, setPrevReview] = useState();
  const [cafeName, setCafeName] = useState('엘리스 애견카페');
  const [rating, setRating] = useState();
  const [title, setTitle] = useState('');
  const [content, setContet] = useState('');
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { prevReview } = state;
      setPrevReview(prevReview);
      setTitle(prevReview.title);
      setContet(prevReview.content);
      setPhotos(prevReview.images);
      setImages(prevReview.images);
      setRating(prevReview.rating);
    }
  }, [state]);

  const { mutate: postReview } = usePostReview(title, content, rating, images);
  const { mutate: putReview } = usePutReview(
    state ? state.prevReview._id : '',
    title,
    content,
    rating,
    images,
  );

  const createNewPost = () => {
    postReview();
  };

  const updatePost = () => {
    putReview();
  };

  const addPhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);

      setImages((prevImages) => [...prevImages, file]); // 실제 파일도 상태에 저장
      setPhotos((prevPhotos) => [...prevPhotos, newPhotoUrl]); // 사용자에게 보여줄 사진
    }
  };

  const deletePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <Container>
      <ReviewWriteContainer>
        <CafeName>
          <FaMapMarkerAlt size={'20px'} />
          {cafeName}
        </CafeName>
        <InputContainer>
          <Text>별점</Text>
          <ReviewWriteRating rating={rating} setRating={setRating} />
        </InputContainer>
        <InputContainer>
          <Text>제목</Text>
          <ReviewTitleInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </InputContainer>
        <ReviewText
          value={content}
          onChange={(e) => setContet(e.target.value)}
          placeholder="5자 이상의 글 내용을 입력해주세요"
        />
        <Text>사진</Text>
        <InputImg>
          {photos.map((photoUrl, index) => (
            <>
              <img key={`review${index}`} src={photoUrl} alt={`${index}`} />
              <FaXmark
                size={'20px'}
                color="red"
                onClick={() => deletePhoto(index)}
              />
            </>
          ))}
        </InputImg>
        <div>
          <InputImgButton className="input-file-button" htmlFor="input-file">
            <span>사진첨부</span>
            <FaCamera size={'20px'} />
          </InputImgButton>
          <input
            type="file"
            id="input-file"
            onChange={addPhoto}
            style={{ display: 'none' }}
          />
        </div>
        {prevReview ? (
          <SubmitButton onClick={updatePost}>리뷰 수정</SubmitButton>
        ) : (
          <SubmitButton onClick={createNewPost}>리뷰 등록</SubmitButton>
        )}
      </ReviewWriteContainer>
    </Container>
  );
};

export default ReviewWritePage;
