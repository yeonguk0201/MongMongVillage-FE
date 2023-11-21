import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin: 30px 0;
  padding: 5px;
  background-image: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 30%
  );
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
