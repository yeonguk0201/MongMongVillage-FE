import { Container, StarContainer, StarValue } from './styles';

const ReviewWriteRating = ({ rating, setRating }) => {
  const handleChange = (e) => {
    setRating(Number(e.target.value));
  };

  return (
    <Container>
      <StarContainer>
        {[...Array(5)].map((_, i) => (
          <>
            <input
              type="radio"
              name="rating"
              value={5 - i}
              id={`rate${5 - i}`}
              onChange={handleChange}
              checked={rating === 5 - i}
            />
            <label
              htmlFor={`rate${5 - i}`}
              className={rating >= 5 - i ? 'filled' : 'empty'}
            >
              ⭐️
            </label>
          </>
        ))}
      </StarContainer>
      <StarValue>{`(${rating})`}</StarValue>
    </Container>
  );
};

export default ReviewWriteRating;
