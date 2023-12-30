import { useState } from 'react';
import { Button, Container } from './styles';

const ReviewPagintaion = ({ currentPage, navigatePage, totalNum }) => {
  const pagePerScreen = 5; // 한 화면에 보이는 페이지 번호 갯수
  const reviewsPerPage = 10; // 한 페이지 당 보일 리뷰 갯수

  const pageNum = parseInt(totalNum / reviewsPerPage) + 1; // 총 페이지 갯수 (전체/한 페이지 당 리뷰 수)

  // 현재 보여지는 페이지 범위 상태
  const [visiblePageStart, setVisiblePageStart] = useState(1);
  const visibledPageEnd = visiblePageStart + pagePerScreen - 1;

  // 이동할 페이지를 파라미터로 받아 이동하며, 시작/끝 범위 조절
  const setPage = (targetPage) => {
    if (visibledPageEnd < targetPage) {
      setVisiblePageStart(visiblePageStart + pagePerScreen);
    }
    if (visiblePageStart > targetPage) {
      setVisiblePageStart(visiblePageStart - pagePerScreen);
    }
    navigatePage(targetPage);
  };

  return (
    <Container>
      {visiblePageStart > 1 && (
        <Button onClick={() => setPage(currentPage - pagePerScreen)}>
          &lt;&lt;
        </Button>
      )}

      {currentPage > 1 && (
        <Button onClick={() => setPage(currentPage - 1)}>&lt;</Button>
      )}

      {Array.from({ length: pagePerScreen }, (_, i) => i + visiblePageStart)
        .filter((p) => p <= pageNum)
        .map((_, i) => (
          <Button
            key={i + visiblePageStart}
            onClick={() => navigatePage(i + visiblePageStart)}
            aria-current={
              currentPage === i + visiblePageStart ? 'page' : undefined
            }
          >
            {i + visiblePageStart}
          </Button>
        ))}
      {currentPage !== pageNum && (
        <Button onClick={() => setPage(currentPage + 1)}>&gt;</Button>
      )}
      {visibledPageEnd < pageNum && (
        <Button
          onClick={() =>
            setPage(
              currentPage + pagePerScreen <= pageNum
                ? currentPage + pagePerScreen
                : pageNum,
            )
          }
        >
          &gt;&gt;
        </Button>
      )}
    </Container>
  );
};

export default ReviewPagintaion;
