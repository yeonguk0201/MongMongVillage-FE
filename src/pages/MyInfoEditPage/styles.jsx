import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  @media screen and (max-width: 767px) {
    margin: 30px 0;
    padding: 50px 0;
  }
`;
