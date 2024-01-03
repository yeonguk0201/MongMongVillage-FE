import styled from 'styled-components';
export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 200px;
  }

  @media screen and (max-width: 767px) {
    height: 150px;
  }
`;

export const DogCafeListItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }

  @media screen and (max-width: 767px) {
    border-radius: 20px;
  }
`;

export const DogCafeInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    display: block;
    padding-top: 10px;
  }
`;

export const DogCafeListItemTitle = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DogCafeListItemRating = styled.p`
  font-size: 18px;

  span {
    padding: 0 5px;
    font-weight: bold;
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    span {
      font-size: 14px;
    }
  }
`;
