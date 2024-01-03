import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
`;

export const Title = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: end;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const More = styled.button`
  font-size: 18px;
  background: none;
  color: darkslategray;
  padding: 0 30px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Content = styled.h1`
  font-size: 32px;
  display: flex;
  width: fit-content;
  align-items: center;

  background: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 20%
  );

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;

    svg {
      scale: 0.8;
      height: 30px;
    }
  }
`;

export const DogCafeList = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffe7bd;
  margin: 0 auto;

  @media screen and (min-width: 1025px) {
    grid-gap: 50px;
    grid-row-gap: 120px;
    border-radius: 50px;
    padding: 86px;
    padding-bottom: 124px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-gap: 40px;
    grid-row-gap: 90px;
    border-radius: 30px;
    padding: 30px;
    padding-bottom: 124px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
    grid-row-gap: 70px;
    border-radius: 20px;
    padding-bottom: 70px;
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
