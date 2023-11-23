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

const ReviewItem = ({ item }) => {
  return (
    <Container>
      <CafeName onClick={() => alert('cafe name')}>
        [{'여기에 카페이름'}]
      </CafeName>
      <MainContainer onClick={() => alert('review detail')}>
        <RightContainer>
          <ReviewTitle>{item.title}</ReviewTitle>
          <Content>{item.content}</Content>
          <BottomContainer>
            <Writer>
              {item.userImg ? (
                <img alt="유저프로필이미지" src={item.userImg} />
              ) : (
                <img
                  src={`${`${process.env.PUBLIC_URL}/imges/user.png`}`}
                  alt="user_img"
                />
              )}
              <span>username</span>
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
          {item.images.length > 0 && <PreviewImg src={item.images[0]} />}
        </PreviewImgContainer>
      </MainContainer>
    </Container>
  );
};

export default ReviewItem;
