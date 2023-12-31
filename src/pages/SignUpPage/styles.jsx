import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  display: flex;
  width: 400px;
  margin: 100px auto;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 27px -5px gray;
  padding: 50px;
  border: 2px solid var(--main-yellow-color);
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    max-width: 80vw;
    padding: 20px;
    margin: 30px auto;
  }
`;

export const CheckButton = styled.button`
  border: none;
  background-color: lightgray;
  border-radius: 20px;
  margin-left: 10px;
  width: 25%;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 767px) {
    border-radius: 10px;
    font-size: 12px;
    width: 30%;
    padding: 10px 5px;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  margin: 30px 0;

  @media screen and (max-width: 767px) {
    margin: 15px 0;
    padding: 7px;
    font-size: 16px;
  }
`;

export const InputContainer = styled.form`
  width: 100%;
`;

export const AuthInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: ${(props) =>
    props.border === 'none' ? 'none' : '1px solid gray'};
  svg {
    margin: 0 10px;
    cursor: pointer;
    scale: 1.3;
    color: gray;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 10px;
  margin-top: 10px;
  font-size: 1rem;
  border: none;
  border-bottom: ${(props) =>
    props.border === 'none' ? 'none' : '1px solid gray'};

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin: 10px;
  color: ${(props) => (props.success === 'true' ? 'green' : 'red')};

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Img = styled.img`
  width: 200px;
  margin: 0;
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;
