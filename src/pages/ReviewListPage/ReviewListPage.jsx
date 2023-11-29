import React, { useState, useEffect } from 'react';
import { Container, ReviewListContainer } from './styels';
import { Title } from '../../commonStyles';
import { ReviewItem, ReviewListSort, ReviewPagintaion } from '../../components';
import { useGetReviews } from '../../hooks/getReviews';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const ReviewListPage = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const location = useLocation();
  const sort = new URLSearchParams(location.search).get('sort') || 'latest';
  const page = new URLSearchParams(location.search).get('page') || 1;

  const { data: reviews, isLoading } = useGetReviews(sort, page);

  useEffect(() => {
    if (reviews) setList(reviews);
  }, [reviews]);

  const handlePage = (newPage) => {
    navigate(ROUTE.REVIEW_LIST_PAGE.link + `?sort=${sort}&page=${newPage}`);

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleSorting = (sortType) => {
    navigate(ROUTE.REVIEW_LIST_PAGE.link + `?sort=${sortType}&page=${page}`);

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Title>리뷰 모아보기</Title>
      <ReviewListContainer>
        <ReviewListSort handleSorting={handleSorting} />
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          list.map((item) => <ReviewItem key={item._id} id={item._id} />)
        )}
      </ReviewListContainer>
      <ReviewPagintaion page={page} navigatePage={handlePage} />
    </Container>
  );
};

export default ReviewListPage;
