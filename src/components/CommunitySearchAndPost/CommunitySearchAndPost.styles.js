import styled from 'styled-components';

export const SearchAndPostContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
`;

export const Space = styled.div`
  width: 10%;
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: 500px;
  height: 45px;
  border: 3px solid var(--main-yellow-color);
  border-radius: 40px;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 35px;
  }
`;

export const PostBTN = styled.button`
  display: flex;
  border: 1px solid lightgrey;
  background-color: var(--main-yellow-color);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  svg {
    margin-left: 5px;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    align-items: center;
    justify-content: center;
    bottom: 5%;
    right: 5%;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    padding: 0;
    box-shadow: 2px 2px 5px 1px gray;
    svg {
      margin: 0;
    }
    span {
      display: none;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: var(--main-yellow-color);
  align-items: center;
  justify-content: center;
  padding-right: 17px;
  svg {
    margin: 0 auto;
    padding: 10px;
    color: white;
    margin-top: 4px;
    margin-left: 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  width: 100%;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
