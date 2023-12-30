import {
  Container,
  StarRating,
  CafeDetailContainer,
  CafeImg,
  CafeInfoContainer,
  CafeInfo,
  WriteReviewBtn,
  CafeMiniTitle,
  InfoMiniContainer,
  ReviewStarRatingContainer,
  TopContainer,
} from './styles';
import { BsPencilSquare } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading, ReviewItem } from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Title } from '../../commonStyles';
import { useGetCafe } from '../../hooks/getCafe';

const CafeDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const linkToWriteReview = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate(`${ROUTE.REVIEW_WRITE_PAGE.link}/${id}`);
  };

  const { data: cafeDetailInfo, isLoading, isError } = useGetCafe(id);

  return isLoading ? (
    <Loading />
  ) : (
    !isError && cafeDetailInfo.cafe && cafeDetailInfo.reviews && (
      <Container>
        <CafeDetailContainer>
          <Title>{cafeDetailInfo.cafe.name}</Title>
          {cafeDetailInfo.cafe.image.length > 0 ? (
            <CafeImg src={cafeDetailInfo.cafe.image}></CafeImg>
          ) : (
            <></>
          )}
          <TopContainer>
            <span className="title">상세정보</span>
            <span className="update">{`최근 업데이트 | ${
              cafeDetailInfo.cafe.updatedAt.split('T')[0]
            }`}</span>
          </TopContainer>
          <CafeInfoContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>주소</CafeMiniTitle>
              {cafeDetailInfo.cafe.road_addr ? (
                <CafeInfo>{cafeDetailInfo.cafe.road_addr}</CafeInfo>
              ) : (
                <CafeInfo>장소 정보가 없습니다.</CafeInfo>
              )}
              <CafeMiniTitle className="bottomTitle">영업시간</CafeMiniTitle>
              {cafeDetailInfo.cafe.operating_time ? (
                cafeDetailInfo.cafe.operating_time
                  .split('/')
                  .map((item, index) => <CafeInfo key={index}>{item}</CafeInfo>)
              ) : (
                <CafeInfo>영업시간 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>

            <InfoMiniContainer>
              <CafeMiniTitle>메뉴</CafeMiniTitle>
              {cafeDetailInfo.cafe.menu ? (
                cafeDetailInfo.cafe.menu.split('/').map((item, index) => (
                  <CafeInfo className="menu" key={index}>
                    - {item}
                  </CafeInfo>
                ))
              ) : (
                <CafeInfo>메뉴 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>소개</CafeMiniTitle>
              {cafeDetailInfo.cafe.intro ? (
                <CafeInfo>
                  {cafeDetailInfo.cafe.intro.replace(/[.]/gim, '.\n')}
                </CafeInfo>
              ) : (
                <CafeInfo>소개 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>

            <InfoMiniContainer>
              <CafeMiniTitle>
                전체 리뷰 ( {cafeDetailInfo.reviews.length} )
              </CafeMiniTitle>
              <ReviewStarRatingContainer>
                <StarRating>
                  평균 별점 | {cafeDetailInfo.cafe.rating}점
                </StarRating>
                <WriteReviewBtn onClick={linkToWriteReview}>
                  리뷰 작성하기
                  <BsPencilSquare size={'18px'} />
                </WriteReviewBtn>
              </ReviewStarRatingContainer>
              {cafeDetailInfo?.reviews.length > 0 ? (
                <div className="reviewContainer">
                  {cafeDetailInfo.reviews.map((review) => (
                    <ReviewItem key={review._id} id={review._id} />
                  ))}
                </div>
              ) : (
                <div className="noReview">작성된 리뷰가 없습니다.</div>
              )}
            </InfoMiniContainer>
          </CafeInfoContainer>
        </CafeDetailContainer>
      </Container>
    )
  );
};

export default CafeDetail;
