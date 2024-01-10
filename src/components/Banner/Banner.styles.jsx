import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 99vw;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImg = styled.img`
  max-width: 1420px;
  border-radius: 50px;
  margin: 0 auto;

  @media screen and (min-width: 1025px) {
    width: 1200px;
    max-width: 90vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 80vw;
  }

  @media screen and (max-width: 767px) {
    width: 85vw;
    border-radius: 25px;
  }
`;

export const PopolarCafeBtn = styled.button`
  width: 250px;
  height: 45px;
  margin-left: 148px;
  border-radius: 50px;
  background: #ffa6e2;
  font-size: 24px;
  z-index: 10;
  svg {
    margin: 0 3px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 17vw;
    height: 24px;
    font-size: 14px;
    margin-left: 9.5vw;
    top: 10px;
  }

  @media screen and (max-width: 767px) {
    width: 23vw;
    height: 14px;
    font-size: 9px;
    margin-left: 10vw;
    top: 15px;
    svg {
      scale: 0.8;
      margin: 0 1px;
    }
  }
`;

export const SearchCafeButton = styled.button`
  background-color: #ff814c;

  @media screen and (min-width: 1025px) {
    margin-left: 300px;
    width: 600px;
    height: 70px;
    font-size: 35px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40vw;
    height: 36px;
    font-size: 18px;
    margin-left: 20vw;
  }

  @media screen and (max-width: 767px) {
    width: 50vw;
    height: 20px;
    font-size: 10px;
    margin-left: 16vw;
    top: 4px;
  }
`;

export const BtnImg = styled.img`
  position: fixed;
  left: 350px;
  bottom: -40px;
  width: 36px;
  height: 36px;
  transform: rotate(20deg);

  @media screen and (max-width: 1024px) {
    display: none !important;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-family: 'KOTRAHOPE';
    color: white;
  }

  @media screen and (min-width: 1025px) {
    width: 1200px;
    top: 84%;
    /* 버튼에 hover시 캐릭터 이미지 나타내기 */
    &:hover {
      ${BtnImg} {
        left: 370px;
        bottom: -10px;
        transition: 0.5s;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 80vw;
    top: 83%;
  }

  @media screen and (max-width: 767px) {
    width: 85vw;
    top: 80%;
  }
`;
