import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 200px auto;
  width: 90%;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
`;

export const NameContainer = styled.div`
  margin: 20px;
  width: 20%;
  text-align: center;
  background-color: #fce786;
  border-radius: 10px;
  padding: 15px;
  span {
    font-weight: bold;
    margin-right: 5px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
