import { useEffect, useState } from 'react';
import {
  ReviewDetailContainer,
  ReviewTitleContainer,
  ReviewMainSection,
  ReviewTitle,
  TitleStarRaiting,
  StarRaiting,
  ProfileContainer,
  ProfileImg,
  Username,
  ReviewDate,
  ReviewImg,
  MainText,
  ReviewImgContainer,
  CafeName,
  MapContainer,
  Button,
  ButtonContainer,
  AnotherReviewsContainer,
} from './styels';
import { useGetReview } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Kakao, ReviewItem } from '../../components';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Title } from '../../commonStyles';

const ReviewDetailPage = () => {
  const [review, setReview] = useState({
    title: '',
    content: '',
    createdAt: new Date(),
    rating: 0,
    images: [],
  });

  const { id } = useParams();

  const { isLoading, mutate: getReview, data: reviewData } = useGetReview(id);

  useEffect(() => {
    if (id) getReview();
  }, [getReview, id]);

  useEffect(() => {
    console.log(reviewData);
    if (reviewData) {
      setReview({
        title: reviewData.title,
        content: reviewData.content,
        createdAt: reviewData.createdAt,
        rating: reviewData.rating,
        images: reviewData.images,
      });
    }
  }, [reviewData]);

  console.log(review);
  return (
    !isLoading &&
    review && (
      <>
        <ReviewDetailContainer>
          <ReviewTitleContainer>
            <TitleStarRaiting>
              <ReviewTitle>{review.title}</ReviewTitle>
              <StarRaiting>
                <span>
                  {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                </span>
                {`(${review.rating})`}
                <ReviewDate>
                  {new Date(review.createdAt).toLocaleString()} 작성
                </ReviewDate>
              </StarRaiting>
            </TitleStarRaiting>
            <ProfileContainer>
              <ProfileImg
                src={`${process.env.PUBLIC_URL}/imges/user.png`}
              ></ProfileImg>
              <Username>username</Username>
            </ProfileContainer>
          </ReviewTitleContainer>
          <MapContainer>
            아래 지도는 임의로 불러온 것이며, 추후 실제 장소로 변경, 사이즈
            조절, 검색어창 제거 예정
            <CafeName>
              <FaMapMarkerAlt size={'24px'} />
              몽몽 애견카페
            </CafeName>
            <Kakao />
          </MapContainer>
          <ReviewMainSection>
            <ReviewImgContainer>
              {review.images.length > 0 &&
                review.images.map((item) => (
                  <ReviewImg src={item} alt="" key={item} />
                ))}
            </ReviewImgContainer>
            <MainText>{review.content}</MainText>
          </ReviewMainSection>
          <ButtonContainer>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonContainer>
        </ReviewDetailContainer>
        <AnotherReviewsContainer>
          <Title>{'엘리스 애견카페'}의 리뷰 리스트</Title>
          <ReviewItem item={review} />
          <ReviewItem item={review} />
          <ReviewItem item={review} />
          <ReviewItem item={review} />
        </AnotherReviewsContainer>
      </>
    )
  );
};

export default ReviewDetailPage;
