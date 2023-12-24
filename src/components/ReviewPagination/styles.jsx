import styled from 'styled-components';

export const Container = styled.div`
  gap: 8px;
  display: flex;
  padding: 50px 0;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    gap: 5px;
    padding: 30px 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
    font-size: 16px;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    border: solid 3px var(--main-yellow-color);
    cursor: revert;
    transform: revert;
  }

  &:hover {
    background-color: var(--main-yellow-color);
  }
`;
