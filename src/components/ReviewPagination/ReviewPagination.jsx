import { Button, Container } from './styles';
const ReviewPagintaion = ({ page, navigatePage }) => {
  const pageNumbs = 5;
  const currentPage = parseInt(page);

  return (
    <Container>
      {currentPage > 1 && (
        <Button onClick={() => navigatePage(currentPage - 1)}>&lt;</Button>
      )}
      {Array(pageNumbs)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => navigatePage(i + 1)}
            aria-current={currentPage === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => navigatePage(currentPage + 1)}
        disabled={currentPage === pageNumbs}
      >
        &gt;
      </Button>
    </Container>
  );
};

export default ReviewPagintaion;
