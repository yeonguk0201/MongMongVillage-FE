import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  .SearchResult {
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    span {
      font-weight: 900;
    }
    @media screen and (max-width: 767px) {
      font-size: 14px;
      text-align: center;
    }
  }
`;
