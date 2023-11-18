import { useState } from 'react';
import { Container, CountContainer, CountItem, Line, Title } from './styles';

const MyActivity = () => {
  const [myactivityCount, setMyActivityCount] = useState({
    post: 10,
    comment: 20,
    like: 30,
    review: 15,
  });

  return (
    <Container>
      <Title>내 활동</Title>
      <Line />
      <CountContainer>
        <CountItem>
          <p>작성글</p>
          <p>{myactivityCount.post}개</p>
        </CountItem>
        <CountItem>
          <p>작성댓글</p>
          <p>{myactivityCount.comment}개</p>
        </CountItem>
        <CountItem>
          <p>좋아요</p>
          <p>{myactivityCount.like}개</p>
        </CountItem>
        <CountItem>
          <p>작성리뷰</p>
          <p>{myactivityCount.review}개</p>
        </CountItem>
      </CountContainer>
    </Container>
  );
};

export default MyActivity;
