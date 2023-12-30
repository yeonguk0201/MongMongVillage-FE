import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px;

  img {
    height: 400px;
    margin: 10px;
  }
  justify-content: center;

  @media screen and (max-width: 767px) {
    img {
      height: 200px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgray;
  padding-bottom: 20px;
  p {
    width: 90%;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    p {
      width: 85%;
    }
  }
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  align-self: center;
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    padding: 5px;
    font-size: 10px;
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  margin: 12px 0;
  font-size: 18px;
  line-height: 1.5;
  padding: 0 20px;
  @media screen and (max-width: 767px) {
    margin: 10px 0;
    font-size: 14px;
  }
`;
