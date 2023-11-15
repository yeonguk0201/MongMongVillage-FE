import { Header, Footer, Banner } from '../../components';
import { Container, Title } from './styels';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Title>메인페이지</Title>
      <Footer />
    </Container>
  );
};

export default MainPage;
