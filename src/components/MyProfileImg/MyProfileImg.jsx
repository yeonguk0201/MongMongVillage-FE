import { ProfileImgContainer, ProfileImgItem } from './styles';
import { useState } from 'react';

const MyProfileImg = ({ imgSrc }) => {
  return (
    <>
      <ProfileImgContainer>
        <ProfileImgItem src={imgSrc} />
      </ProfileImgContainer>
    </>
  );
};

export default MyProfileImg;
