import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  Title,
  Content,
  BottomContainer,
  Count,
  DateText,
  TopContainer,
} from './styles';

const MyPostItem = ({ post }) => {
  return post ? (
    <Container>
      <TopContainer>
        <div>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </div>
        <MyEditAndRemoveButtons />
      </TopContainer>
      <BottomContainer>
        <div>
          <Count>댓글 : {post.comment_id.length}</Count>
          <Count>좋아요 : {post.like_count}</Count>
        </div>
        <DateText>
          {new Date(post.createdAt).toLocaleString() + ' 작성'}
        </DateText>
      </BottomContainer>
    </Container>
  ) : (
    <Container>로딩중 . . .</Container>
  );
};

export default MyPostItem;
