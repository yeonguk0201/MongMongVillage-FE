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

  const allPopularCafes = [
    {
      _id: 12345678,
      name: '캠핑고양이 양재점1',
      road_addr: '서울 강남구 도곡로4길 38 1층',
      image: '',
      intro: '안녕하세요 소개창입니다.',
      operating_time: '매일 12:00 - 22:00',
      phone_number: '0507-1497-0881',
      rating: 3.3,
    },
    {
      _id: 12345678,
      name: '캠핑고양이 양재점2',
      road_addr: '서울 강남구 도곡로4길 38 1층',
      image: '',
      intro: '안녕하세요 소개창입니다.',
      operating_time: '매일 12:00 - 22:00',
      phone_number: '0507-1497-0881',
      rating: 3.3,
    },
    {
      _id: 12345678,
      name: '캠핑고양이 양재점3',
      road_addr: '서울 강남구 도곡로4길 38 1층',
      image: '',
      intro: '안녕하세요 소개창입니다.',
      operating_time: '매일 12:00 - 22:00',
      phone_number: '0507-1497-0881',
      rating: 3.3,
    },
  ];

  return (
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
        {allPopularCafes.map((content, index) => (
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
