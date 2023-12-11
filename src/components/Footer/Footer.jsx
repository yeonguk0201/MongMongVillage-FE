import {
  Container,
  Content,
  FooterContainer,
  NavList,
  ListContainer,
  InfoContainer,
  SiteName,
  SnsContainer,
  LogoContainer,
  Line,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../Logo/Logo.svg';
import { ROUTE } from '../../routes/Routes';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaBlogger } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <FooterContainer>
        <LogoContainer>
          <LogoSVG width="15vw" />
          <SiteName>
            MONGMONG <br />- VILLAGE-
          </SiteName>
        </LogoContainer>
        <Line />
        <InfoContainer>
          <Content>상호명 : 멍멍빌리지 | 대표 : 최정윤 </Content>
          <Content>고객센터 : mongmonghelp@gmail.com</Content>
          <Content>배너 출처 : wepik.com</Content>
          <Content>Copyright 2023 by Team6, Inc, All rights reserved</Content>
        </InfoContainer>

        <Line />
        <ListContainer>
          <NavList>
            <Content
              onClick={() => {
                navigate(ROUTE.MAIN_PAGE.link);
                scrollTop();
              }}
            >
              HOME
            </Content>
            <Content
              onClick={() => {
                navigate(ROUTE.COMMUNITY_PAGE.link);
                scrollTop();
              }}
            >
              COMMUNITY
            </Content>
            <Content
              onClick={() => {
                navigate(ROUTE.REVIEW_LIST_PAGE.link);
                scrollTop();
              }}
            >
              REVIEW
            </Content>
            <Content
              onClick={() => {
                navigate(ROUTE.CAFE_MAP_PAGE.link);
                scrollTop();
              }}
            >
              SEARCH CAFE
            </Content>
          </NavList>
        </ListContainer>

        <Line />
        <SnsContainer>
          <FaInstagram size="3vw" />
          <FaFacebook size="3vw" />
          <FaXTwitter size="3vw" />
          <FaBlogger size="3vw" />
        </SnsContainer>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
