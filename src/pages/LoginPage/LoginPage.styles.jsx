import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  padding: 60px 50px;
  box-shadow: 0px 0px 27px -5px gray;
  border: 2px solid var(--main-yellow-color);
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    max-width: 80vw;
    padding: 15px 10px;
    border: 1px solid var(--main-yellow-color);
    border-radius: 20px;
  }
`;

export const Img = styled.img`
  width: 200px;
  margin: 0;

  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;

export const AuthInputContainer = styled.div`
  border-bottom: 1px solid lightgray;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 0 10px;
    cursor: pointer;
    scale: 1.3;
    color: gray;
  }
`;

export const AuthInput = styled.input`
  width: 90%;
  border: none;
  margin: 10px;
  padding: 10px;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    padding: 7px;
  }
`;

export const TextButtonContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
  }
  button {
    background: none;
    text-align: center;
    font-size: 16px;
    padding: 0 10px;
    text-decoration: underline;
    &:hover {
      color: var(--main-yellow-color);
    }
  }

  @media screen and (max-width: 767px) {
    margin: 10px 0;
    span {
      font-size: 10px;
    }
    button {
      font-size: 14px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    padding: 7px;
  }
`;
