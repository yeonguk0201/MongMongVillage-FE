import {
  Container,
  Content,
  DogCafeList,
  ErrorContainer,
  More,
  Title,
} from './styles';
import { useGetPolularCafes } from '../../hooks/getPopularCafes';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { GiPartyPopper } from 'react-icons/gi';
import { Loading } from '../Loading';
import { PopularCafeItem } from '../PopularCafeItem';

const PopularCafes = () => {
  const navigate = useNavigate();

  const linkTop100 = () => {
    navigate(ROUTE.Popular_Cafe_List_Page.link);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { data, isLoading, error } = useGetPolularCafes();

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Title>
        <Content>
          <GiPartyPopper size={'40px'} color="rgba(255, 77, 77, 0.94)" />
          <span>인기 애견카페</span>
          <GiPartyPopper
            size={'40px'}
            color="rgba(255, 77, 77, 0.94)"
            style={{ transform: 'scaleX(-1)' }}
          />
        </Content>
        <More onClick={linkTop100}>더보기</More>
      </Title>
      {error ? (
        <ErrorContainer>
          인기 애견카페를 불러오는 도중 에러가 생겼습니다.
        </ErrorContainer>
      ) : (
        <DogCafeList>
          {data &&
            data.cafes.map((cafe) => (
              <PopularCafeItem key={cafe._id} cafe={cafe} />
            ))}
        </DogCafeList>
      )}
    </Container>
  );
};

export default PopularCafes;
