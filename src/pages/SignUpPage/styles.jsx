import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 25%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0px 0px 27px -5px gray;
  margin-bottom: 88px;
  margin-top: 88px;
  padding: 34px 67px;
  border: 2px solid #ffd100;
  border-radius: 28px;
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
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  margin: 30px 0;
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
`;

export const Text = styled.p`
  font-size: 12px;
  margin: 10px;
  color: ${(props) => (props.success === 'true' ? 'green' : 'red')};
`;

export const Img = styled.img`
  width: 200px;
  margin: 0;
`;
