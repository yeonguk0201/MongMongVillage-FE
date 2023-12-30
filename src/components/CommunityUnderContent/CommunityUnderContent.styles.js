import styled from 'styled-components';

export const UnderContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  border-bottom: 5px solid lightgray;
  padding-bottom: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContentInfo = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    margin-left: 10px;
  }

  span {
    margin: 0;
    font-size: 12px;
  }

  .nickname {
    margin-bottom: 8px;
    font-weight: bold;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media screen and (max-width: 767px) {
    span {
      font-size: 12px;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
`;

export const BTN = styled.button`
  width: 70px;
  border-radius: 10px;
  padding: 10px;
  margin-right: 5px;
  font-size: 16px;
  background-color: var(--main-yellow-color);

  @media screen and (max-width: 767px) {
    width: 40px;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
  }
`;
