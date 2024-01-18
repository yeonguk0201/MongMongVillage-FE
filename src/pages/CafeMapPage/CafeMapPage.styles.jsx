import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  span {
    margin: 5px 0;
  }

  @media screen and (min-width: 1025px) {
    font-size: 20px;
    padding: 50px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    padding: 30px 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 20px 0;
  }
`;

export const MoreCafeButton = styled.button`
  background-color: transparent;
  background-color: var(--main-yellow-color);
  font-weight: 900;
  color: white;
  border-radius: 20px;

  @media screen and (min-width: 1025px) {
    width: 25%;
    font-size: 24px;
    padding: 5px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    width: 40%;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    width: 60%;
  }
`;
