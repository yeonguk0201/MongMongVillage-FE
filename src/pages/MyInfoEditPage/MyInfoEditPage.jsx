import { MyPageProfile } from '../../components';
import { Container } from './MyInfoEditPage.styles';

const MyInfoEditPage = () => {
  return (
    <Container>
      <MyPageProfile edit={true} />
    </Container>
  );
};

export default MyInfoEditPage;
