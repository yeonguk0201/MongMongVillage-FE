import styled from 'styled-components';

export const Container = styled.main`
  height: 1150px;
  width: 90%;
`;

export const Content = styled.h5`
  display: inline-block;
  font-size: 33px;
  margin: 80px 0 35px 17px;
  width: 290px;
  background: linear-gradient(
    to top,
    var(--main-yellow-color) 35%,
    transparent 30%
  );
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
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
  cursor: pointer;
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
`;

export const DogCafeInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const DogCafeListItemTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const DogCafeListItemRating = styled.span`
  font-size: 18px;
  span {
    padding: 0 5px;
    font-weight: bold;
    font-size: 20px;
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
