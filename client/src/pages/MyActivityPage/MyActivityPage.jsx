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
import { menus } from '../../libs';
import { MyReview } from '../../components/MyReview';

const MyActivityPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(menus.작성글);
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
        {selectedMenu === menus.작성글 ? (
          <MyPost />
        ) : selectedMenu === menus.작성댓글 ? (
          <MyComment />
        ) : selectedMenu === menus.좋아요 ? (
          <MyLike />
        ) : selectedMenu === menus.작성리뷰 ? (
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
