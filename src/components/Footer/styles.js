import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 20vh;
`;

export const FooterContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  height: 90%;
  border-right: 1px solid gray;
  margin: 0 2%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2%;
`;

export const SiteName = styled.p`
  font-size: 1.2rem;
  text-align: center;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ListContainer = styled.section`
  height: 90%;
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.section`
  flex-direction: column;
  justify-content: center;
`;

export const NavList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5%;
  p {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: var(--main-yellow-color);
    }
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  margin: 7% 0;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`;

export const SnsContainer = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  grid-gap: 2vw;
  svg {
    width: 50px;
    height: auto;
    transition: all 0.5s;

    cursor: pointer;
    &:hover {
      color: var(--main-yellow-color);
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    svg {
      width: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    svg {
      width: 20px;
    }
  }
`;
