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
import { useGetReview } from '../../hooks/getReview';
import { useNavigate, useParams } from 'react-router-dom';
import { Kakao, ReviewItem } from '../../components';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Title } from '../../commonStyles';
import { ROUTE } from '../../routes/Routes';

const ReviewDetailPage = () => {
  const navigate = useNavigate();

  const [review, setReview] = useState({
    title: '',
    content: '',
    createdAt: new Date(),
    rating: 0,
    cafeName: '',
    images: [],
  });

  const { id } = useParams();

  const { isLoading, data: reviewData } = useGetReview(id);

  useEffect(() => {
    if (reviewData) {
      setReview({
        cafeName: '앨리스 애견카페',
        title: reviewData.title,
        content: reviewData.content,
        createdAt: reviewData.createdAt,
        rating: reviewData.rating,
        images: reviewData.images,
      });
    }
  }, [reviewData]);

  const linkToReviewEditPage = () => {
    navigate(ROUTE.REVIEW_WRITE_PAGE.link, {
      state: { prevReview: reviewData },
    });
  };

  console.log('리뷰데이터', reviewData);
  return !isLoading && review ? (
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
          아래 지도는 임의로 불러온 것이며, 추후 실제 장소로 변경, 사이즈 조절,
          검색어창 제거 예정
          <CafeName>
            <FaMapMarkerAlt size={'24px'} />
            {review.cafeName}
          </CafeName>
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
          <Button onClick={linkToReviewEditPage}>수정</Button>
          <Button>삭제</Button>
        </ButtonContainer>
      </ReviewDetailContainer>
      <AnotherReviewsContainer>
        <Title>"{review.cafeName}"의 리뷰 리스트</Title>
        <ReviewItem item={reviewData} />
        <ReviewItem item={reviewData} />
        <ReviewItem item={reviewData} />
        <ReviewItem item={reviewData} />
      </AnotherReviewsContainer>
    </>
  ) : (
    <div>로딩중</div>
  );
};

export default ReviewDetailPage;
