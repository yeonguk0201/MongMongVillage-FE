import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  font-size: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  background-color: white;
  color: black;

  border: 3px solid
    ${(props) => (props.active ? 'var(--main-yellow-color)' : 'white')};

  &:hover {
    background-color: ${(props) =>
      props.active ? 'white' : 'var(--main-yellow-color)'} !important;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    width: 25px;
    height: 25px;
    margin: 0 3px;
  }
`;
