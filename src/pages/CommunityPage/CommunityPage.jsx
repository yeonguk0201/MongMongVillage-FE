import { useGetBoards } from '../../hooks/getBoards';
import { useGetCommunitySearch } from '../../hooks/getCommunitySearch';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CommunityNav,
  CommunitySelectSort,
  CommunitySearchAndPost,
  CommunityList,
  CommunityPagination,
  Loading,
} from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Container } from './CommunityPage.styles';
import { Title } from '../../commonStyles';
import { showAlert } from '../../util/showAlert';

// 페이지네이션 페이지 당 아이템 수
const ITEMS_PER_PAGE = 10;

const CommunityPage = () => {
  const user = localStorage.getItem('userId');

  // navigate 객체 생성
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지 , 카테고리, 정렬기준 param을 통해 받음
  const page = Number(new URLSearchParams(location.search).get('page')) || 1; // 페이지
  const category =
    new URLSearchParams(location.search).get('category') || 'all';
  const sort = new URLSearchParams(location.search).get('sort') || 'latest';

  const [list, setList] = useState([]);
  // 총 게시글 수
  const [totalBoards, setTotalBoards] = useState(0);

  // 검색 기능을 위한 state
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 후 필요한 정보 (검색된 총 게시글, 검색어)
  const [searchWord, setSearchWord] = useState();
  const [searchTotal, setSearchTotal] = useState();

  // 서버로부터 list 받아옴
  const { data, isLoading: boardLoading } = useGetBoards(page, category, sort);

  // search 결과 서버로부터 받아옴
  const {
    data: searchData,
    isLoading: searchLoading,
    refetch,
  } = useGetCommunitySearch(searchTerm, page);

  useEffect(() => {
    if (searchTerm) {
      refetch();
    }
  }, [page, category, searchTerm, sort, refetch]);

  useEffect(() => {
    if (data && data.boards) {
      setList(data.boards);
      setTotalBoards(data.total_number_of_boards);
    }
  }, [data, page, category, sort]);

  // 여기가 문제
  useEffect(() => {
    if (searchTerm && searchData && searchData.boards) {
      setList(searchData.boards);
      setTotalBoards(searchData.total_number_of_boards);
      setSearchWord(searchTerm);
      setSearchTotal(searchData.total_number_of_boards);
    }
  }, [searchData, searchTerm]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalBoards / ITEMS_PER_PAGE);

  // 검색창 input을 입력받는 onChange 핸들러
  const handleSearchInputChange = (searchValue) => {
    if (searchValue) {
      setSearchTerm(searchValue);
      navigate(ROUTE.COMMUNITY_PAGE.link + `?category=all&sort=latest&page=1`);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  // 카테고리 선택 onChange 핸들러
  const handleNavClick = (category) => {
    navigate(
      ROUTE.COMMUNITY_PAGE.link + `?category=${category}&sort=${sort}&page=1`,
    );
    setSearchTerm(''); // 카테고리 변경 시 검색어를 비웁니다.
    // 카테고리 변경 시 1페이지로 전환해줌
    setSearchWord('');
    setSearchTotal('');
  };

  // 정렬 onChange 핸들러
  const handleSortChange = (e) => {
    navigate(
      ROUTE.COMMUNITY_PAGE.link +
        `?category=${category}&sort=${e.target.value}&page=${page}`,
    );
  };

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  // 글작성 클릭시 실행 함수
  const handleNewPostClick = () => {
    if (!user) {
      showAlert('', '로그인 후 작성해주세요.', 'warning', () => {});
    } else {
      navigate(ROUTE.NEW_POST_PAGE.link);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    const prevPage = page - 1;
    navigate(
      ROUTE.COMMUNITY_PAGE.link +
        `?category=${category}&sort=${sort}&page=${prevPage}`,
    );
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    const nextPage = page + 1;
    navigate(
      ROUTE.COMMUNITY_PAGE.link +
        `?category=${category}&sort=${sort}&page=${nextPage}`,
    );
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 해당 페이지로 설정 함수
  const goToPage = (targetPage) => {
    if (searchTerm) {
      refetch();
    }
    navigate(
      ROUTE.COMMUNITY_PAGE.link +
        `?category=${category}&sort=${sort}&page=${targetPage}`,
    );
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 각 게시글 클릭시 실행 함수
  const handlePostClick = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
    window.scrollTo(0, 0);
  };

  // 현재 페이지에 표시될 아이템들
  const currentPageItems = list;

  return boardLoading || searchLoading || totalPages === 0 ? (
    <Loading />
  ) : (
    <Container>
      <Title>커뮤니티</Title>
      <CommunityNav
        category={category}
        handleNavClick={handleNavClick}
      ></CommunityNav>

      <CommunitySelectSort
        sortOption={sort}
        handleSortChange={handleSortChange}
      ></CommunitySelectSort>

      {searchWord && searchTotal !== undefined && (
        <p className="SearchResult">
          '<span>{searchWord}</span>' 검색 결과 <span>{searchTotal}</span>개의
          게시글이 있습니다.
        </p>
      )}

      <CommunityList
        currentPageItems={currentPageItems}
        handlePostClick={handlePostClick}
        totalPages={totalPages}
      ></CommunityList>

      <CommunitySearchAndPost
        handleSearchInputChange={handleSearchInputChange}
        handleNewPostClick={handleNewPostClick}
      ></CommunitySearchAndPost>

      <CommunityPagination
        currentPage={page}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        totalPages={totalPages}
        goToPage={goToPage}
      ></CommunityPagination>
    </Container>
  );
};

export default CommunityPage;
