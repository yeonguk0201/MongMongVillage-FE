import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: white;
`;

export const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 1200px;
  max-width: 1420px;
  border-radius: 50px;

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }
  @media screen and (max-width: 1300px) {
    width: 800px;
  }
  @media screen and (max-width: 900px) {
    width: 600px;
  }
`;

export const BannerName = styled.p`
  font-family: 'KOTRAHOPE';
  color: #00573b;
  font-size: 90px;
  text-align: center;
  position: absolute;
  bottom: 314px;
  left: 33px;
  cursor: default;

  @media screen and (max-width: 1400px) {
    font-size: 70px;
    bottom: 270px;
    left: 39px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 58px;
    bottom: 210px;
    left: 30px;
  }
  @media screen and (max-width: 900px) {
    font-size: 50px;
    bottom: 160px;
    left: 10px;
  }
`;

export const BannerSub = styled.p`
  font-family: 'KOTRAHOPE';
  color: white;
  font-size: 32px;
  text-align: center;
  position: absolute;
  bottom: 259px;
  left: 209px;
  cursor: default;

  @media screen and (max-width: 1400px) {
    font-size: 27px;
    bottom: 214px;
    left: 168px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 22px;
    bottom: 170px;
    left: 135px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
    bottom: 128px;
    left: 105px;
  }
`;

export const BannerInfo = styled.p`
  color: #00573b;
  font-size: 20px;
  text-align: left;
  position: absolute;
  bottom: 176px;
  left: 149px;
  cursor: default;

  @media screen and (max-width: 1400px) {
    font-size: 17px;
    bottom: 145px;
    left: 140px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 15px;
    bottom: 110px;
    left: 110px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    bottom: 85px;
    left: 85px;
  }
`;

export const BannerPhoneNumber = styled.h3`
  color: #00573b;
  font-size: 20px;
  position: absolute;
  bottom: 117px;
  left: 200px;
  cursor: default;

  @media screen and (max-width: 1400px) {
    font-size: 19px;
    bottom: 98px;
    left: 165px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 17px;
    bottom: 78px;
    left: 135px;
  }
  @media screen and (max-width: 900px) {
    font-size: 13px;
    bottom: 58px;
    left: 100px;
  }
`;

export const PopolarCafeBtn = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  bottom: 20px;
  left: 150px;
  background: #ffa6e2;
  color: white;
  font-size: 23px;
  font-family: 'KOTRAHOPE';
  z-index: 1;
  svg {
    margin: 0 3px;
  }

  @media screen and (max-width: 1400px) {
    width: 240px;
    height: 43px;
    bottom: 30px;
    left: 155px;
    font-size: 23px;
  }
  @media screen and (max-width: 1300px) {
    width: 220px;
    height: 36px;
    bottom: 22px;
    left: 125px;
    font-size: 21px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }

  &.search {
    left: 270px;
    width: 680px;
    height: 70px;
    font-size: 35px;
    background-color: #ff814c;

    @media screen and (max-width: 1400px) {
      left: 210px;
      bottom: 20px;
      width: 600px;
      height: 60px;
      font-size: 28px;
    }
    @media screen and (max-width: 1400px) {
      left: 170px;
      bottom: 20px;
      width: 480px;
      height: 47px;
      font-size: 25px;
    }
    @media screen and (max-width: 900px) {
      display: block;
      left: 125px;
      bottom: 10px;
      width: 380px;
      height: 35px;
      font-size: 20px;
    }
  }
`;

export const BtnImg = styled.img`
  position: absolute;
  bottom: 30px;
  left: 350px;
  width: 40px;
  height: 40px;
  transform: rotate(20deg);

  @media screen and (max-width: 1400px) {
    bottom: 35px;
    width: 32px;
    height: 32px;
  }
  @media screen and (max-width: 1300px) {
    bottom: 30px;
    left: 310px;
    width: 28px;
    height: 28px;
  }
  @media screen and (max-width: 900px) {
    display: none !important;
  }
`;

export const HoverContainer = styled.div`
  &:hover {
    ${BtnImg} {
      left: 368px;
      bottom: 63px;
      transition: 0.5s;

      @media screen and (max-width: 1300px) {
        left: 313px;
        bottom: 50px;
      }
    }
  }
`;
