import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 10px;
  border-bottom: solid 1px lightgrey;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: 130px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    height: 110px;
  }
`;

export const ReviewTitle = styled.p`
  font-weight: 700;
  padding: 10px 0;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CafeName = styled.p`
  font-weight: bold;
  color: gray;
  cursor: pointer;
  display: flex;
  padding: 5px 0;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }
  svg {
    margin-right: 5px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 1px 0;
    svg {
      scale: 0.8;
    }
  }
`;

export const Content = styled.p`
  padding: 5px 0;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  max-height: 2.4em;
  line-height: 1.5em;

  white-space: pre-wrap;
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

export const PreviewImgContainer = styled.div`
  height: 130px;
  display: flex;
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`;

export const PreviewImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  margin: 0 5px;

  @media screen and (min-width: 1024px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 767px) {
    width: 75px;
    height: 75px;
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 20px;
  span,
  p {
    font-size: 12px;
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

  @media screen and (max-width: 767px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #191919;
`;

export const StarRating = styled.div`
  gap: 3px;
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 900;
  .ratingStar {
    color: var(--main-yellow-color);
  }
  .ratingValue {
    color: gray;
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    .ratingValue {
      font-size: 11px;
    }
  }
`;
