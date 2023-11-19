import { useState } from 'react';
import {
  Footer,
  Header,
  MyMenuBar,
  MyPost,
  MyProfileImg,
  MyLike,
  MyComment,
} from '../../components';
import { Container, NameContainer } from './styles';
import { myActivityMenus } from '../../libs';
import { MyReview } from '../../components/MyReview';

const MyActivityPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(myActivityMenus.post);
  const [name] = useState('엘리스');
  return (
    <>
      <Header />
      <Container>
        <MyProfileImg />
        <NameContainer>
          <span>{name}</span>님의 활동
        </NameContainer>
        <MyMenuBar setMenu={setSelectedMenu} menu={selectedMenu} />
        {selectedMenu === myActivityMenus.post ? (
          <MyPost />
        ) : selectedMenu === myActivityMenus.comment ? (
          <MyComment />
        ) : selectedMenu === myActivityMenus.like ? (
          <MyLike />
        ) : selectedMenu === myActivityMenus.review ? (
          <MyReview />
        ) : (
          <></>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MyActivityPage;
