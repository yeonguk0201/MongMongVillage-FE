import { useEffect, useState } from 'react';
import { Container } from './styles';
import { MyPostItem } from '../MyPostItem';
import { useGetMyBoards } from '../../hooks/getMyBoards';

const MyPost = () => {
  const [posts, setPosts] = useState([]);

  const { data: myposts } = useGetMyBoards();

  useEffect(() => {
    setPosts(myposts);
  }, [myposts]);

  return myposts ? (
    <Container>
      {posts.map((item, idx) => {
        return <MyPostItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>로딩중 ...</Container>
  );
};

export default MyPost;
