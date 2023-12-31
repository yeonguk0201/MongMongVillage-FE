import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const ReviewWriteContainer = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const ReviewTitleInput = styled.input`
  padding: 10px;
  border: 1px solid #e4e4e6;
  border-radius: 10px;
  width: 95%;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CafeName = styled.p`
  color: #635f51;
  font-weight: bold;
  display: flex;
  padding: 10px 0;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    svg {
      scale: 0.9;
    }
  }
`;

export const Text = styled.p`
  font-weight: bold;
  padding: 5px;
  width: 7%;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 10%;
  }
`;

export const InputImg = styled.div`
  width: 95vw;
  margin: 10px 0;
  padding: 0;
  height: 150px;
  background-color: #fff5ce;
  border-radius: 30px;
  border: 1px dashed #868688;
  display: flex;
  img {
    height: 130px;
    padding: 10px 0 0 10px;
  }
  svg {
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    height: 100px;
    img {
      height: 60px;
    }
    svg {
      scale: 0.7;
    }
  }
`;

export const ReviewText = styled.textarea`
  width: 96%;
  padding: 20px 2%;
  margin: 10px 0;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
  @media screen and (min-width: 1024px) {
    height: 300px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 250px;
  }
  @media screen and (max-width: 767px) {
    height: 200px;
    padding: 10px;
    font-size: 14px;
  }
`;

export const InputImgButton = styled.label`
  cursor: pointer;
  width: 15%;
  background-color: #e4e4e6;
  border-radius: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  svg {
    margin: 0 5px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 25%;
    svg {
      scale: 0.7;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  background-color: var(--main-yellow-color);
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  margin: 50px auto;
  @media screen and (min-width: 1024px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    border-radius: 20px;
    font-size: 16px;
    padding: 10px;
    margin: 30px auto;
  }
`;
