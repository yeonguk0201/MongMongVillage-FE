import { useNavigate } from 'react-router-dom';
import {
  Container,
  RightContainer,
  ReviewTitle,
  PreviewImg,
  ReviewDate,
  StarRating,
  CafeName,
  PreviewImgContainer,
  Content,
  Writer,
  BottomContainer,
  MainContainer,
} from './styles';
import { ROUTE } from '../../routes/Routes';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useGetReview } from '../../hooks/getReview';
import { getRelativeTime } from '../../libs/getRelativeTime';

const ReviewItem = ({ review }) => {
  const { _id, cafe_id, content, createdAt, images, rating, title } = review;

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const linkToDetailPage = () => {
    navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${_id}`);
    scrollToTop();
  };

  const linkToCafeDetailPage = (cafeId) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${cafeId}`);
    scrollToTop();
  };

  const { data: reviewData } = useGetReview(_id);

  return (
    <Container>
      <CafeName
        onClick={() =>
          linkToCafeDetailPage(cafe_id?._id ?? reviewData.cafe_id._id)
        }
      >
        <FaMapMarkerAlt size={'18px'} />
        {cafe_id?.name ?? reviewData?.cafe_id?.name}
      </CafeName>
      <MainContainer onClick={linkToDetailPage}>
        <RightContainer>
          <ReviewTitle>{title}</ReviewTitle>
          <Content>{content?.replace(/<br>/g, '\n')}</Content>
          <BottomContainer>
            <Writer>
              <img
                loading="lazy"
                src={
                  reviewData?.user_id?.profilePicture ??
                  `${`${process.env.PUBLIC_URL}/imges/user.webp`}`
                }
                alt="user_img"
              />
              <span>{reviewData?.user_id?.nickname ?? ''}</span>
            </Writer>
            <ReviewDate>
              {reviewData &&
                getRelativeTime(createdAt ?? reviewData?.createdAt)}
            </ReviewDate>
            <StarRating>
              <span className="ratingStar">
                {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
              </span>
              <span className="ratingValue">{`(${rating})`}</span>
            </StarRating>
          </BottomContainer>
        </RightContainer>
        <PreviewImgContainer>
          {images?.length > 0 && (
            <PreviewImg loading="lazy" src={images[0]} alt="review-img" />
          )}
        </PreviewImgContainer>
      </MainContainer>
    </Container>
  );
};

export default ReviewItem;
