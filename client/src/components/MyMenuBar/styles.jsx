import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 2px gray solid;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const MenuButton = styled.nav`
  width: 25%;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  &.selected > span {
    font-weight: bold;
    background: linear-gradient(
      to top,
      var(--main-yellow-color) 30%,
      transparent 30%
    );
  }
`;
