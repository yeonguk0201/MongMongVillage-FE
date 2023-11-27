import { useState } from 'react';
import {
  MyMenuBar,
  MyPost,
  MyProfileImg,
  MyLike,
  MyComment,
} from '../../components';
import { Container, NameContainer } from './styles';
import { MyActivityMenus } from '../../libs/MyActivityMenuBar';
import { MyReview } from '../../components/MyReview';
import { useGetUserInfo } from '../../hooks/getUserInfo';

const MyActivityPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(MyActivityMenus.post);
  const { isLoading, data: userInfo } = useGetUserInfo();

  return isLoading ? (
    <div>로딩중 . . .</div>
  ) : (
    <Container>
      <MyProfileImg />
      <NameContainer>
        <span>{userInfo.nickname}</span>님의 활동
      </NameContainer>
      <MyMenuBar setMenu={setSelectedMenu} menu={selectedMenu} />
      {selectedMenu === MyActivityMenus.post ? (
        <MyPost />
      ) : selectedMenu === MyActivityMenus.comment ? (
        <MyComment />
      ) : selectedMenu === MyActivityMenus.like ? (
        <MyLike />
      ) : selectedMenu === MyActivityMenus.review ? (
        <MyReview />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default MyActivityPage;
