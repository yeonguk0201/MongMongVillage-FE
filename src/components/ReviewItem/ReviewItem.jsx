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
import { useGetUserInfo } from '../../hooks/getUserInfo';

const ReviewItem = ({ item }) => {
  const navigate = useNavigate();

  const linkToDetailPage = () => {
    navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${item._id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { data: userInfo } = useGetUserInfo(item.user_id);
  // console.log(item.user_id, userInfo?.email);
  return (
    item && (
      <Container>
        <CafeName onClick={() => alert('cafe name')}>
          <FaMapMarkerAlt size={'18px'} />
          {'엘리스 애견카페'}
        </CafeName>
        <MainContainer onClick={linkToDetailPage}>
          <RightContainer>
            <ReviewTitle>{item.title}</ReviewTitle>
            <Content>{item.content}</Content>
            <BottomContainer>
              <Writer>
                <img
                  src={
                    userInfo?.profilePicture
                      ? userInfo.profilePicture
                      : `${`${process.env.PUBLIC_URL}/imges/user.png`}`
                  }
                  alt="user_img"
                />

                <span>{userInfo?.nickname ?? ''}</span>
              </Writer>
              <ReviewDate>
                {new Date(item.createdAt).toLocaleString() + ' 작성'}
              </ReviewDate>
              <StarRating>
                <span className="ratingStar">
                  {'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}
                </span>
                <span className="ratingValue">{`(${item.rating})`}</span>
              </StarRating>
            </BottomContainer>
          </RightContainer>
          <PreviewImgContainer>
            {item.images.length > 0 &&
              item.images
                .slice(0, 3)
                .map((img, idx) => (
                  <PreviewImg src={img} key={item._id + 'img' + idx} />
                ))}
          </PreviewImgContainer>
        </MainContainer>
      </Container>
    )
  );
};

export default ReviewItem;
