import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 80px 0;
  button {
    border-radius: 5px;
  }
  @media screen and (max-width: 767px) {
    margin: 30px 0;
    padding: 50px 0;
  }
`;

export const Title = styled.h1`
  color: white;
  background-color: var(--main-yellow-color);
  font-size: 26px;
  text-align: center;
`;

export const InfoUpdateButton = styled.button`
  width: 200px;
  background-color: var(--main-yellow-color);
  box-shadow: 2px 1px 1px lightgray;
  margin: 20px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 150px;
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  width: 150px;
  background-color: lightgray;
  box-shadow: 1px 1px 1px grey;
  font-size: 14px;
  padding: 5px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 100px;
  }
`;
