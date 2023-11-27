import { useState } from 'react';
import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  TopContainer,
  BottomContainer,
  Content,
  Title,
  DateText,
  Writer,
} from './styles';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const MyLikeItem = ({ post }) => {
  const [isLike, setIsLike] = useState(true);

  const cancelLike = () => {
    setIsLike(false);
    alert('좋아요 목록에서 삭제합니다.');
    // 좋아요 삭제 기능 처리
  };

  return (
    <Container>
      <TopContainer>
        <div>
          <Title>{post.board_id.title}</Title>
          <Content>{post.board_id.content}</Content>
        </div>
        {post.isMine && <MyEditAndRemoveButtons />}
      </TopContainer>
      <BottomContainer>
        <div>
          <Writer>
            <img
              src={
                post.board_id.writerProfileImg ??
                `${process.env.PUBLIC_URL}/imges/user.png`
              }
              alt="propfile"
            />
            <span>{post.board_id.userID ?? 'username'}</span>
          </Writer>
          <DateText>
            {new Date(post.board_id.createdAt).toLocaleString() + ' 작성'}
          </DateText>
        </div>
        {isLike ? (
          <FaHeart onClick={cancelLike} color="red" size={'20px'} />
        ) : (
          <FaRegHeart size={'20px'} color="red" />
        )}
      </BottomContainer>
    </Container>
  );
};

export default MyLikeItem;
