import styled from 'styled-components';

export const ProfileImgContainer = styled.div`
  border-radius: 70%;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 125px;
    height: 125px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
