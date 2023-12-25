import styled from 'styled-components';

export const CafeListItemContainer = styled.article`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: #f8f8f8;
  }
  @media screen and (min-width: 1024px) {
    padding: 30px 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 10px 5px;
  }
`;

export const CafeRanking = styled.div`
  width: 10%;
  font-size: 26px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    width: 20px;
    padding: 0 5px;
  }
`;

export const CafeContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-content: center;
  width: 90%;
`;

export const CafeImgContainer = styled.div`
  border-radius: 70%;
  overflow: hidden;
  margin: auto 10px;
  @media screen and (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    margin: auto 5px;
  }
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  line-height: 22px;
`;

export const CafeTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Info = styled.div`
  padding-top: 3px;
  display: flex;
  span {
    width: 90%;
    color: gray;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  svg {
    margin-right: 5px;
    color: var(--main-yellow-color);
    align-self: center;
    @media screen and (max-width: 767px) {
      scale: 0.9;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
    padding-top: 1px;
  }
`;
