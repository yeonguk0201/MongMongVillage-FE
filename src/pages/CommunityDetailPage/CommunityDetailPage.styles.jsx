import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 95%;
  margin: 20px auto;
  @media screen and (max-width: 767px) {
    margin: 10px auto;
    width: 95vw;
  }
`;
