import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  @media screen and (max-width: 767px) {
    padding: 70px 0;
    width: 95vw;
  }
`;
