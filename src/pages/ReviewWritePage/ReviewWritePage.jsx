import { useState } from 'react';
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

const ReviewWritePage = () => {
  const [rating, setRating] = useState();
  const [title, setTitle] = useState('');
  const [content, setContet] = useState('');
  const [photos, setPhotos] = useState([]);

  const addPhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const newPhotoUrl = URL.createObjectURL(file);

      setPhotos((prevPhotos) => [...prevPhotos, newPhotoUrl]);
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
          몽몽 애견 카페
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
              <img key={index} src={photoUrl} alt={` ${index}`} />
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
        <SubmitButton>리뷰 등록</SubmitButton>
      </ReviewWriteContainer>
    </Container>
  );
};

export default ReviewWritePage;
