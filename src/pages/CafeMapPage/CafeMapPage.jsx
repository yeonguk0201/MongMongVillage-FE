import { useNavigate } from 'react-router-dom';
import { Title } from '../../commonStyles';
import { Kakao } from '../../components';
import {
  ButtonContainer,
  Container,
  MoreCafeButton,
} from './CafeMapPage.styles';
import { ROUTE } from '../../routes/Routes';

const CafeMapPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>애견카페 찾기</Title>
      <Kakao />
      <ButtonContainer>
        <span>더 많은 애견카페를 보고 싶으신가요?</span>
        <MoreCafeButton onClick={() => navigate(ROUTE.CAFE_LIST_PAGE.link)}>
          애견카페 둘러보기 →{' '}
        </MoreCafeButton>
      </ButtonContainer>
    </Container>
  );
};

export default CafeMapPage;
