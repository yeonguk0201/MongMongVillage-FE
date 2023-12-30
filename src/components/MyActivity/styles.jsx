import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px auto;
`;

export const Title = styled.button`
  background-color: transparent;
  font-size: 18px;
  margin: 20px auto;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Line = styled.div`
  width: 40%;
  margin: 5px auto;
  border-bottom: 2px gray solid;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  margin: 15px auto;
  width: 40%;
  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 14px;
  }
`;

export const CountItem = styled.div`
  width: 25%;
  & > p:first-child {
    color: gray;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
