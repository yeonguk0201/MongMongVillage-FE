import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin: 5px;
  border-radius: 5px;
  width: 50px;
  padding: 5px;
  &:hover {
    background-color: var(--main-yellow-color);
  }
`;
