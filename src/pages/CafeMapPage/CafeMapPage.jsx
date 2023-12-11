import { Title } from '../../commonStyles';
import { Kakao } from '../../components';
import { Container } from './styles';

const CafeMapPage = () => {
  return (
    <Container>
      <Title>애견카페 찾기</Title>
      <Kakao />
    </Container>
  );
};

export default CafeMapPage;
