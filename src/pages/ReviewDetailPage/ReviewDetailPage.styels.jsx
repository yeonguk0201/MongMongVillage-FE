import styled from 'styled-components';

export const ReviewDetailContainer = styled.div`
  display: flex;
  width: 95vw;
  max-width: 1280px;
  padding-bottom: 100px;
  margin: 0 auto;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const ReviewTitleContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: solid lightgrey;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const ReviewMainSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 100px 0;
  white-space: pre-wrap;
`;

export const TitleStarRating = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`;

export const StarRating = styled.div`
  align-items: center;
  display: flex;

  span {
    margin: 0 5px;
    color: var(--main-yellow-color);
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const ReviewTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 10px 0;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 0 20px;
  @media screen and (max-width: 767px) {
    margin: 0 5px;
    padding: 10px;
  }
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 26px;
    height: 26px;
  }
`;

export const Username = styled.p`
  padding-left: 5px;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #191919;
  padding-left: 30px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const CafeName = styled.p`
  cursor: pointer;
  display: flex;
  padding: 10px;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  svg {
    margin: 0 5px;
  }
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    svg {
      scale: 0.8;
    }
  }
`;

export const MapContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ReviewImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

export const ReviewImg = styled.img`
  height: 400px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

export const MainText = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  line-height: 150%;
  word-spacing: 2px;
  padding: 20px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-items: end;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button`
  width: 70px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: var(--main-yellow-color);
`;

export const AnotherReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid gray;
`;
