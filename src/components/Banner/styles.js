import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background-color: white;
`;

export const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImg = styled.img`
  max-width: 80vw;
  border-radius: 50px;

  @media screen and (max-width: 1023px) {
    border-radius: 20px;
  }
`;

export const BannerName = styled.p`
  font-family: 'KOTRAHOPE';
  color: #00573b;
  font-size: 90px;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 15vw;
  @media screen and (max-width: 1023px) {
    font-size: 40px;
  }
`;

export const BannerSub = styled.p`
  font-family: 'KOTRAHOPE';
  color: white;
  font-size: 32px;
  text-align: center;
  position: absolute;
  left: 24vw;
  top: 52%;
  @media screen and (max-width: 1023px) {
    border-radius: 20px;
    font-size: 20px;
  }
`;

export const BannerInfo = styled.p`
  color: #00573b;
  font-size: 20px;
  text-align: left;
  position: absolute;
  left: 20vw;
  top: 62%;
  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const BannerPhoneNumber = styled.h3`
  color: #00573b;
  font-size: 20px;
  position: absolute;
  top: 76%;
  left: 23.5vw;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const PopolarCafeBtn = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  bottom: 3vh;
  left: 20vw;
  background: #ffa6e2;
  color: white;
  font-size: 23px;
  font-family: 'KOTRAHOPE';
  z-index: 1;

  svg {
    margin: 0 3px;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const BtnImg = styled.img`
  position: absolute;
  bottom: 3.5vh;
  left: 22vw;
  width: 40px;
  height: 40px;
  transform: rotate(20deg);
`;

export const HoverContainer = styled.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
  &:hover {
    ${BtnImg} {
      left: 24vw;
      bottom: 7.5vh;
      transition: 0.5s;
    }
  }
`;
