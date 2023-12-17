import {
  Container,
  CafeRanking,
  CafeListItemContainer,
  CafeTitle,
  CafeImg,
  StarContainer,
  StarRating,
  Info,
  ItemContainer,
  GridCafe,
  CafeContainer,
  PageTitle,
  ShowInfo,
  SpeachBubble,
  ShowBubbleContainer,
  Line,
} from './styles';
import { useGetTop100 } from '../../hooks/getTop100';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { Loading } from '../Loading';
import { HiHome } from 'react-icons/hi';
import { GoClockFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

const PopularCafeLists = () => {
  const navigate = useNavigate();

  const linkToCafe = (id) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { data, isLoading, error } = useGetTop100();
  console.log('데이터', data);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <h1>에러</h1>
  ) : (
    <Container>
      <PageTitle>카페 랭킹 TOP 100</PageTitle>
      <ShowBubbleContainer>
        <ShowInfo>카페 랭킹이란?</ShowInfo>
        <SpeachBubble>
          리뷰수와 별점이 높을 수록 순위가 높아집니다!
        </SpeachBubble>
      </ShowBubbleContainer>

      <Line />

      <GridCafe>
        {data &&
          data.cafes.map((content, index) => (
            <CafeListItemContainer key={index}>
              <CafeRanking>{index + 1}</CafeRanking>
              <CafeContainer
                onClick={() => {
                  linkToCafe(content._id);
                }}
              >
                <CafeImg
                  src={
                    content.image.length > 0
                      ? content.image
                      : '/imges/default.png'
                  }
                  alt={`cafe ${index}`}
                />
                <ItemContainer>
                  <CafeTitle>{content.name}</CafeTitle>
                  <StarContainer>
                    <FaStar
                      color="var(--main-yellow-color)"
                      style={{ verticalAlign: 'middle' }}
                    />
                    &nbsp;
                    <StarRating>{content.rating}</StarRating>
                  </StarContainer>
                  <Info>
                    <HiHome
                      color="var(--main-yellow-color)"
                      style={{ verticalAlign: 'middle' }}
                    />
                    &nbsp;
                    {content.road_addr}
                  </Info>
                  <Info>
                    <GoClockFill
                      color="var(--main-yellow-color)"
                      style={{ verticalAlign: 'middle' }}
                    />
                    &nbsp;
                    {content.operating_time}
                  </Info>
                </ItemContainer>
              </CafeContainer>
            </CafeListItemContainer>
          ))}
      </GridCafe>
    </Container>
  );
};

export default PopularCafeLists;
