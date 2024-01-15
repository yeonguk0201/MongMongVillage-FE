import {
  Container,
  BannerImg,
  BannerBox,
  PopolarCafeBtn,
  SearchCafeButton,
  BtnImg,
  ButtonContainer,
} from './Banner.styles';
import { ROUTE } from '../../routes/Routes';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';
import { HiCursorClick } from 'react-icons/hi';
import './slick.css';
import './slick-theme.css';

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    dots: true,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <Container>
      <Slider {...settings}>
        <BannerBox>
          <BannerImg src="/banner.webp" />
          <ButtonContainer>
            <PopolarCafeBtn
              onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}
            >
              인기 애견카페 확인!
              <HiCursorClick />
            </PopolarCafeBtn>
            <BtnImg src="/imges/btnlogo.png" alt="사진"></BtnImg>
          </ButtonContainer>
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner2.webp" />
          <ButtonContainer>
            <SearchCafeButton
              onClick={() => navigate(ROUTE.CAFE_MAP_PAGE.link)}
            >
              강아지랑 같이 갈 애견카페 검색하러 가기!
              <HiCursorClick />
            </SearchCafeButton>
          </ButtonContainer>
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner3.webp" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner4.webp" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner5.webp" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner6.webp" />
        </BannerBox>
      </Slider>
    </Container>
  );
};

export default Banner;
