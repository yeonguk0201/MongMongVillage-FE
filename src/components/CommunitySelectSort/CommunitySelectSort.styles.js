import styled from 'styled-components';

export const SelectSortContainer = styled.div`
  display: flex;
  padding: 30px;
  font-size: 16px;

  label {
    display: flex;
    margin-right: 15px;
    text-align: center;
    align-items: center;
  }

  input[type='radio'] {
    margin: 0 5px;
    appearance: none;
    width: 12px;
    height: 12px;
    border: 2px solid var(--main-yellow-color);
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='radio']:checked {
    background-color: var(--main-yellow-color);
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 20px;
  }
`;
