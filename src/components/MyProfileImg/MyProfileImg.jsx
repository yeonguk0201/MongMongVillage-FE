import { ProfileImgContainer, ProfileImgItem } from './styles';

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
