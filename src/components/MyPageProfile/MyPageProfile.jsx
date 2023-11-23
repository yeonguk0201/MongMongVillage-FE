import { useState, useEffect } from 'react';
import {
  ProfileContainer,
  MyInfoContainer,
  MyName,
  MyIntroduction,
  MyEmail,
  ImgEditButton,
  MyInfoEditContainer,
  MyInfoEditItemContainer,
  SubmitButton,
  WithdrawalButton,
  WithdrawText,
  CheckButton,
} from './styles';
import { useDeleteUser, useGetUserInfo, usePatchUserInfo } from '../../hooks';

import { MyProfileImg } from '../MyProfileImg';
import { FaPencil } from 'react-icons/fa6';

const MyPageProfile = ({ edit }) => {
  const [myInfo, setMyInfo] = useState({
    nickname: '',
    introduction: ' ',
    email: ' ',
  });

  const { mutate: getUser, data: userData } = useGetUserInfo();

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (userData) {
      setMyInfo({
        nickname: userData.nickname,
        email: userData.email,
        introduction: userData.introduction,
      });
    }
  }, [userData]);

  const { mutate: deleteUser } = useDeleteUser();

  const handleDeleteUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말 탈퇴하시겠습니까?')) {
      deleteUser();
    }
  };

  const { mutate: putUser } = usePatchUserInfo(
    myInfo.nickname,
    myInfo.introduction,
  );

  const handlePutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('회원정보를 수정하시겠습니까?')) {
      putUser();
    }
  };

  /* 사용자 정보에서 사진 불러오기 추가할것 -> 없으면 기본 이미지(user.png)로 */

  const [preview, setPreview] = useState(
    `${process.env.PUBLIC_URL}/imges/user.png`,
  );

  const handleImgFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkDuplicateNickname = () => {
    // 중복체크 함수 추가할 것
  };

  return (
    <ProfileContainer>
      <MyProfileImg imgSrc={preview} />
      {edit && (
        <>
          <ImgEditButton className="input-file-button" htmlFor="input-file">
            사진 수정
            <FaPencil />
          </ImgEditButton>
          <input
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={handleImgFile}
          />
        </>
      )}

      {edit ? (
        <>
          <MyInfoEditContainer>
            <MyInfoEditItemContainer>
              <label>닉네임</label>
              <input
                value={myInfo.nickname}
                onChange={(e) =>
                  setMyInfo({ ...myInfo, nickname: e.target.value })
                }
              />
              <CheckButton onClick={checkDuplicateNickname}>
                중복체크
              </CheckButton>
            </MyInfoEditItemContainer>
            <MyInfoEditItemContainer>
              <label>소개</label>
              <textarea
                value={myInfo.introduction || ''}
                onChange={(e) =>
                  setMyInfo({ ...myInfo, introduction: e.target.value })
                }
              />
            </MyInfoEditItemContainer>
          </MyInfoEditContainer>
          <SubmitButton onClick={handlePutUser}>수정 완료</SubmitButton>
          <WithdrawalButton onClick={handleDeleteUser}>
            회원 탈퇴
          </WithdrawalButton>
          <WithdrawText>
            회원 탈퇴 시 계정 관련 데이터를 복구할 수 없습니다.
          </WithdrawText>
        </>
      ) : (
        <MyInfoContainer>
          <MyName>{myInfo.nickname}</MyName>
          <MyIntroduction>{myInfo.introduction}</MyIntroduction>
          <MyEmail>{myInfo.email}</MyEmail>
        </MyInfoContainer>
      )}
    </ProfileContainer>
  );
};

export default MyPageProfile;
