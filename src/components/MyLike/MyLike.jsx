import { useEffect, useState } from 'react';
import { Container, NoDataText } from './styles';
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

  return myLike?.length > 0 ? (
    <Container>
      {posts.map((item, idx) => {
        return <MyLikeItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>좋아요 한 글이 없습니다.</NoDataText>
    </Container>
  );
};

export default MyLike;
