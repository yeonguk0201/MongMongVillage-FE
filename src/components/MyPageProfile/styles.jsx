import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  button {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .photo {
    border: none;
  }
`;

export const ProfileImgContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
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

export const ImgEditButton = styled.label`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--main-yellow-color);
  margin: 20px 0;
  svg {
    margin: 0 3px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MyInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px;
  p {
    margin: 10px;
  }

  @media screen and (max-width: 767px) {
    p {
      margin: 5px;
    }
  }
`;

export const MyName = styled.p`
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const MyIntroduction = styled.p`
  font-size: 16px;
  &.no-introduction {
    color: lightgray;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const MyEmail = styled.p`
  color: gray;
  padding: 10px 0;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MyInfoEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;

  .inputText {
    font-size: 10px;
    text-align: center;
    margin-bottom: 20px;
    color: red;
    &.green {
      color: green;
    }
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const MyInfoEditItemContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  label {
    margin-right: 10px;
    width: 80px;
    text-align: center;
  }
  input {
    width: 50%;
  }
  input,
  textarea {
    border: 1px lightgray solid;
    padding: 15px;
    border-radius: 10px;
  }
  textarea {
    height: 150px;
    width: 75%;
  }

  @media screen and (max-width: 767px) {
    label {
      width: 50px;
    }
    input,
    textarea {
      padding: 10px;
      font-size: 14px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--main-yellow-color);
  font-size: 18px;
  margin: 30px;
  @media screen and (max-width: 767px) {
    width: 90%;
    font-size: 16px;
  }
`;

export const WithdrawalButton = styled.button`
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const WithdrawText = styled.p`
  color: gray;
  font-size: 12px;
  margin: 5px;
`;

export const CheckButton = styled.button`
  background-color: lightgray;
  border-radius: 20px;
  margin-left: 10px;
  width: 20%;
  padding: 15px;
  @media screen and (max-width: 767px) {
    width: 25%;
    padding: 10px;
    margin-left: 5px;
  }
`;
