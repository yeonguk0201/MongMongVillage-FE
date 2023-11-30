import { Container } from './styles';

const NotFoundPage = () => {
  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/imges/notfound.png`}
        alt="notfound"
      />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <button>메인페이지로 이동</button>
    </Container>
  );
};

export default NotFoundPage;
