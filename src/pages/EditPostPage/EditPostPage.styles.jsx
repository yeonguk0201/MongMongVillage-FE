import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  @media screen and (max-width: 767px) {
    width: 97vw;
  }
`;
