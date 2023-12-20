import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
`;

export const Content = styled.h1`
  font-size: 32px;
  margin: 50px 0;
  display: flex;
  width: fit-content;
  align-items: center;

  background: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 20%
  );

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 26px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    svg {
      scale: 0.7;
    }
  }
`;

export const DogCafeList = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  grid-row-gap: 120px;
  border-radius: 50px;
  background: #ffe7bd;
  padding: 86px;
  padding-bottom: 124px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    grid-gap: 20px;
    grid-row-gap: 20px;
    border-radius: 20px;
    padding: 30px;
    padding-bottom: 10px;
  }
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
  cursor: pointer;

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
    height: 50%;
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
  @media screen and (max-width: 767px) {
    display: block;
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

export const ErrorContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 50px;
  font-size: 40px;
`;

export const More = styled.span`
  font-size: 18px;
  color: darkslategrey;
  margin-left: 5px;
  cursor: pointer;
`;
