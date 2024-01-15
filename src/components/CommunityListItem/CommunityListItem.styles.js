import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid lightgray;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const TopContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  span {
    font-weight: bold;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  align-items: center;
  width: 80%;
  line-height: 16px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 12px;
  align-items: center;

  @media screen and (max-width: 767px) {
    font-size: 10px;
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  margin: 30px 30px 0 0;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: normal;

  max-height: 2.4em;
  line-height: 1.3em;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    margin: 20px 20px 0 0;
    font-size: 14px;
  }
`;

export const PostImg = styled.img`
  object-fit: cover;
  border-radius: 15px;
  margin: 0 5px;

  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 130px;
    height: 130px;
  }

  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

export const Count = styled.span`
  display: flex;
  align-items: center;
  margin: 0 10px;
  svg {
    margin-right: 5px;
  }
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin: 0 5px;
  }

  img {
    border-radius: 70%;
    overflow: hidden;
    width: 25px;
    height: 25px;
  }
`;

export const DateText = styled.span`
  font-size: 12px;
  color: gray;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
