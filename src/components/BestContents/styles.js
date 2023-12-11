import styled from 'styled-components';

export const Container = styled.main`
  padding: 54px 0;
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

export const ErrorContainer = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
