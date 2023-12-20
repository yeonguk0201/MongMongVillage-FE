import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95px;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 10px 0px lightgray;
  font-size: 18px;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 80px;
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    height: 70px;
    font-size: 14px;
  }
`;

export const Navbar = styled.div`
  max-width: 1920px;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .admin {
    font-size: 14px;
    color: var(--main-yellow-color);
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 10px;
`;

export const NavitemContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: green;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    display: none;
    &.hide {
      background-color: var(--main-yellow-color);
      box-shadow: 3px 3px 10px 0px lightgray;
      display: block;
      width: 100vw;
      position: absolute;
      z-index: 12;
      right: 0;
      top: 0;
    }
  }
`;

export const Navitem = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin: 0 10px;
  border-radius: 10px;
  padding: 10px 15px;
  width: auto;
  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }

  &#home {
    margin: 0 1% 0 5%;
  }

  &.active {
    background-color: var(--main-yellow-color);
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    display: block;
    margin: 10px 0;
  }
`;

export const Space = styled.div``;
