import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
  background-color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  text-align: center;
  width: 60%;
  height: 50px;
  margin-top: 20px;
  border: 3px solid var(--main-yellow-color);
  border-radius: 50px;
  overflow: hidden;
  max-width: 964px;
  display: flex;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    height: 30px;
    border-radius: 25px;
    border: 2px solid var(--main-yellow-color);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  padding-left: 30px;
  border: none;
  outline: none;
  font-size: 20px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
    width: 90%;
    padding-left: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 97%;
    padding-left: 10px;
  }
`;

export const SearchButton = styled.button`
  background-color: var(--main-yellow-color);
  color: #fff;
  border: none;
  padding: 0 35px;
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    svg {
      scale: 0.7;
    }
  }
`;
