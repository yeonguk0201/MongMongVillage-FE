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
import { ReviewItem } from '../../components';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Title } from '../../commonStyles';
import { ROUTE } from '../../routes/Routes';
import { useDeleteReview } from '../../hooks/deleteReview';
import { useGetCafe } from '../../hooks/getCafe';

const ReviewDetailPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  const { id } = useParams();

  const { isLoading: reviewLoading, data: review } = useGetReview(id); // 리뷰 상세 불러오기
  const { data: cafe } = useGetCafe(review?.cafe_id?._id); // 카페 상세 불러오기
  const { mutate } = useDeleteReview(id); // 리뷰 삭제

  const deleteReview = () => {
    mutate();
  };

  /* 리뷰 수정 페이지로 이동 */
  const linkToReviewEditPage = () => {
    navigate(`${ROUTE.REVIEW_WRITE_PAGE.link}/${review?.cafe_id?._id}`, {
      state: { prevReview: review },
    });
  };

  return !reviewLoading && review ? (
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
              src={
                review?.user_id?.profilePicture ??
                `${`${process.env.PUBLIC_URL}/imges/user.png`}`
              }
            ></ProfileImg>
            <Username>{review?.user_id?.nickname ?? ''}</Username>
          </ProfileContainer>
        </ReviewTitleContainer>
        <MapContainer>
          <CafeName>
            <FaMapMarkerAlt size={'24px'} />
            {review?.cafe_id?.name}
          </CafeName>
          지도 불러올 자리
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
        {
          <ButtonContainer>
            {review?.user_id?._id === userId && (
              <Button onClick={linkToReviewEditPage}>수정</Button>
            )}
            {role === 'ADMIN' || review?.user_id?._id === userId ? (
              <Button onClick={deleteReview}>삭제</Button>
            ) : (
              <></>
            )}
          </ButtonContainer>
        }
      </ReviewDetailContainer>
      <AnotherReviewsContainer>
        <Title>"{review?.cafe_id?.name}"의 리뷰 리스트</Title>
        {cafe &&
          cafe?.reviews.map((item) => (
            <ReviewItem id={item._id} key={item._id} />
          ))}
      </AnotherReviewsContainer>
    </>
  ) : (
    <ReviewDetailContainer>로딩 중 ...</ReviewDetailContainer>
  );
};

export default ReviewDetailPage;
