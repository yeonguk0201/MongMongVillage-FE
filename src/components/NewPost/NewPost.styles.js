import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  max-width: 1280px;
  width: 95%;
  @media screen and (max-width: 767px) {
    margin: 20px auto;
  }
  .InputPhoto {
    margin-bottom: 100px;
  }
`;

export const Title = styled.h3`
  margin: 10px 0;
`;

export const NewPostContainer = styled.div`
  margin-top: 100px;
  width: 95%;
`;

export const CategorySelector = styled.select`
  width: 200px;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1%;
  margin-bottom: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 10px;
    width: 95%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1%;
  height: 300px;
  margin: 20px 0 100px 0;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
  @media screen and (max-width: 767px) {
    width: 95%;
    font-size: 14px;
    padding: 10px;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export const ImageUploadContainer = styled.div`
  border: 2px dashed #ccc;
  background-color: lightyellow;
  height: 120px;
  padding: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    height: 90px;
    padding: 10px;
    width: 95%;
  }
`;

export const ImageUploadText = styled.p`
  margin: 0;
`;

export const PostBTN = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  font-size: 20px;
  font-weight: bold;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 60px;
  border: none;
  background-color: var(--main-yellow-color);

  margin: 50px auto;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
`;

export const InputImg = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;
  padding: 10px;
  height: 150px;
  background-color: #fff5ce;
  border-radius: 30px;
  border: 1px dashed #868688;
  display: flex;
  img {
    height: 130px;
  }
  svg {
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    img {
      height: 90px;
    }
  }
`;

export const InputImgButton = styled.label`
  cursor: pointer;
  width: 150px;
  background-color: #f6f6f9;
  border-radius: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  svg {
    margin: 0 5px;
  }

  @media screen and (max-width: 767px) {
    width: 100px;
    font-size: 12px;
    padding: 10px;
    svg {
      scale: 0.7;
    }
  }
`;
