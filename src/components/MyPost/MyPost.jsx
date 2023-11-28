import { useEffect, useState } from 'react';
import { Container, NoDataText } from './styles';
import { MyPostItem } from '../MyPostItem';
import { useGetMyBoards } from '../../hooks/getMyBoards';

const MyPost = () => {
  const [posts, setPosts] = useState([]);

  const { data: myposts } = useGetMyBoards();

  useEffect(() => {
    setPosts(myposts);
  }, [myposts]);

  return myposts.length > 0 ? (
    <Container>
      {posts.map((item, idx) => {
        return <MyPostItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>작성한 댓글이 없습니다.</NoDataText>
    </Container>
  );
};

export default MyPost;
