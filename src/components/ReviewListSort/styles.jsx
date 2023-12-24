import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px;
  font-size: 16px;

  span {
    margin-right: 10px;
  }

  label {
    display: flex;
    align-items: center;
  }

  input[type='radio'] {
    margin: 0 5px;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid var(--main-yellow-color);
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='radio']:checked {
    background-color: var(--main-yellow-color);
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin: 10px;
    input[type='radio'] {
      width: 12px;
      height: 12px;
    }
  }
`;
