import { ReactComponent as LogoSVG } from './Logo.svg';

import styled from 'styled-components';

const StyledLogo = styled.div`
  margin-left: 10%;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-left: 3%;
  }
`;

const Logo = ({ onClick }) => {
  return (
    <StyledLogo onClick={onClick}>
      <LogoSVG width="95px" height="95px" />
    </StyledLogo>
  );
};

export default Logo;
