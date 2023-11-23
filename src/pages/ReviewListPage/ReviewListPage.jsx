import React, { useState, useEffect } from 'react';
import { Container, ReviewListContainer, Title } from './styels';
import { ReviewItem, ReviewListSort, ReviewPagintaion } from '../../components';
import { useGetReviews } from '../../hooks';

const ReviewListPage = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('latest');

  const { mutate: getReviews, data, isLoading } = useGetReviews();

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    if (data) {
      setList(data.data);
    }
  }, [data]);

  useEffect(() => {
    // 정렬기준에 따른 데이터 불러오기
  }, [sortType]);

  useEffect(() => {
    // 페이지 값에 따른 데이터 불러오기
  }, [page]);

  const handleSorting = (sortType) => {
    if (sortType === 'latest') {
      setSortType('latest');
    } else if (sortType === 'popular') {
      setSortType('popular');
    }
  };

  return (
    <Container>
      <Title>리뷰 모아보기</Title>
      <ReviewListContainer>
        <ReviewListSort handleSorting={handleSorting} />
        {isLoading ? (
          <p>로딩중</p>
        ) : (
          list.map((item) => <ReviewItem item={item} key={item._id} />)
        )}
      </ReviewListContainer>
      <ReviewPagintaion page={page} setPage={setPage} />
    </Container>
  );
};

export default ReviewListPage;
