import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 100px 0;
  button {
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 767px) {
    /* margin: 30px 0; */
    padding: 50px 0;
  }
`;
