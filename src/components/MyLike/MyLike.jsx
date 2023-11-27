import { useEffect, useState } from 'react';
import { Container } from './styles';
import { MyLikeItem } from '../index';
import { useGetMyLike } from '../../hooks/getMyLike';
const MyLike = () => {
  const [posts, setPosts] = useState([]);

  const { isLoading, data: myLike } = useGetMyLike();

  useEffect(() => {
    if (!isLoading) {
      setPosts(myLike);
    }
  }, []);

  return myLike ? (
    <Container>
      {posts.map((item, idx) => {
        return <MyLikeItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>좋아요 한 글이 없습니다.</Container>
  );
};

export default MyLike;
