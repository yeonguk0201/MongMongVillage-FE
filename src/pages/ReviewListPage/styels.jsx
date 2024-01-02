import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 70px 0;
  }
`;

export const ReviewListContainer = styled.div`
  width: 95vw !important;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 1vh;
  border-top: solid 3px var(--main-yellow-color);
`;
