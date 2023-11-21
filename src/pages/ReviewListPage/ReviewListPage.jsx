import React, { useState, useEffect } from 'react';
import {
  Container,
  ReviewListContainer,
  ReviewContainer,
  ReviewTitle,
  TitlePreviewContainer,
  Preview,
  PreviewImg,
  ReviewMain,
  ReviewSub,
  ProfileContainer,
  ProfileImg,
  Username,
  ReviewDate,
  StarRating,
  RadioButtonContainer,
  PageButtonContainer,
  CafeName,
  Button,
} from './styels';

const ReviewListPage = () => {
  const [list, setList] = useState([
    {
      id: 1,
      title: '애견카페 너무 좋아용!!',
      review: `애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 4,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
    {
      id: 2,
      title: '애견카페 너무 좋아용!$$',
      review: `파주 애견동반 힐링카페 힐링그라운드
      조용하고 깔끔 넓은 정원에서 댕댕이와 시간보내기 좋은곳입니다
      입장료+음료값 8천원입니다
      음료도 맛있구요
      캠핑장분위기도나고 선선한 그늘에서 이름대로 힐링장소로 딱입니다`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 5,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
    {
      id: 3,
      title: '애견카페 너무 좋아용##',
      review: `애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 2,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
    {
      id: 4,
      title: '애견카페 너무 좋아용@@',
      review: `애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 1,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
    {
      id: 5,
      title: '애견카페 너무 좋아용^^',
      review: `애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 3,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
    {
      id: 6,
      title: '애견카페 너무 좋아용&&',
      review: `애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
      시간이었어요~!!`,
      date: '2023-11-11 16:23:30',
      previewImg:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg',
      rating: 4,
      cafeName: `@@ 애견카페 2`,
      user: {
        id: 1,
        profileImg:
          'https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png',
        name: 'username',
      },
    },
  ]);

  const [page, setPage] = useState(1);

  const PageNation = ({ page, setPage }) => {
    const pageNumbs = 5;

    return (
      <>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(pageNumbs)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === pageNumbs}>
          &gt;
        </Button>
      </>
    );
  };

  return (
    <Container>
      <ReviewListContainer>
        <RadioButtonContainer>
          <label>
            <input type="radio" name="contact" value="Latest" checked />
            <span>최신순</span>
          </label>
          <label>
            <input type="radio" name="contact" value="popularity" />
            <span>인기순</span>
          </label>
        </RadioButtonContainer>
        {list.map((item) => {
          console.log(item);
          return (
            <Review
              id={item.id}
              title={item.title}
              review={item.review}
              date={item.date}
              previewImg={item.previewImg}
              rating={item.rating}
              cafeName={item.cafeName}
              user={item.user}
              key={item.id}
            />
          );
        })}
      </ReviewListContainer>
      <PageButtonContainer>
        <PageNation page={page} setPage={setPage} />
      </PageButtonContainer>
    </Container>
  );
};

const Review = ({
  id,
  title,
  review,
  date,
  previewImg,
  rating,
  cafeName,
  user,
  key,
}) => {
  return (
    <ReviewContainer>
      <ReviewMain>
        <TitlePreviewContainer>
          <CafeName>[{cafeName}]</CafeName>
          <ReviewTitle>{title}</ReviewTitle>
          <Preview>{review}</Preview>
        </TitlePreviewContainer>
        <PreviewImg src={previewImg}></PreviewImg>
      </ReviewMain>
      <ReviewSub>
        <ProfileContainer>
          <ProfileImg src={user.profileImg}></ProfileImg>
          <Username>username</Username>
        </ProfileContainer>
        <ReviewDate>{date}</ReviewDate>
        <StarRating>
          {`(${rating})`}
          <span>{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</span>
        </StarRating>
      </ReviewSub>
    </ReviewContainer>
  );
};

export default ReviewListPage;
