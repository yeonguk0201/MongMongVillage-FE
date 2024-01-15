import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import {
  Container,
  PostImg,
  TopContainer,
  Writer,
  BottomContainer,
  Title,
  DateText,
  Count,
  Category,
  Content,
  MiddleContainer,
} from './CommunityListItem.styles.js';
import { getRelativeTime } from '../../libs/getRelativeTime.js';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes.js';

const CommunityListItem = ({ item }) => {
  const navigate = useNavigate();

  const formattedContent = item.content.replace(/\n/g, '<br>');
  const [categoryKor, setCategoryKor] = useState('');

  // 각 게시글 클릭시 실행 함수
  const handlePostClick = () => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${item?._id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (item.category === 'info') {
      setCategoryKor('정보글');
    } else if (item.category === 'general') {
      setCategoryKor('자유글');
    } else {
      setCategoryKor('질문글');
    }
  }, [item.category]);

  return (
    <Container onClick={handlePostClick}>
      <TopContainer>
        <Category>
          <span>{categoryKor}</span>
        </Category>
        <Title>{item.title}</Title>
      </TopContainer>
      <MiddleContainer>
        <Content dangerouslySetInnerHTML={{ __html: formattedContent }} />
        {item.images.length > 0 && (
          <PostImg src={item.images[0]} alt="이미지" />
        )}
      </MiddleContainer>
      <BottomContainer>
        <Writer>
          <img
            src={
              item?.user_id?.profilePicture ??
              `${process.env.PUBLIC_URL}/imges/user.webp`
            }
            style={{ objectFit: 'cover' }}
            alt="UserImg"
          />

          <span>{item?.user_id?.nickname}</span>
        </Writer>
        <Count>댓글 : {item.comment_id.length}</Count>
        <Count>
          <FaHeart color="red" size={'20px'} /> {item.like_count}
        </Count>
        <DateText>{getRelativeTime(item?.createdAt)} 작성</DateText>
      </BottomContainer>
    </Container>
  );
};

export default CommunityListItem;
