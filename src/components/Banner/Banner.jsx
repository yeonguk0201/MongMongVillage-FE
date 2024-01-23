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

  const scrollToPopular = () => {
    let topValue = document.body.clientHeight;
    console.log(topValue);

    if (window.innerWidth >= 670 && window.innerWidth <= 767) {
      topValue = 2300;
    } else if (window.innerWidth >= 550 && window.innerWidth <= 669) {
      topValue = 2100;
    } else if (window.innerWidth >= 450 && window.innerWidth <= 549) {
      topValue = 1900;
    } else if (window.innerWidth <= 449) {
      topValue = 1700;
    }

    const scrollPosition = (23.2 * topValue) / 100;

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  return (
    <Container>
      <Slider {...settings}>
        <BannerBox>
          <BannerImg src="/banner.webp" alt="banner1" />
          <ButtonContainer>
            <PopolarCafeBtn onClick={scrollToPopular}>
              인기 애견카페 확인!
              <HiCursorClick />
            </PopolarCafeBtn>
            <BtnImg src="/imges/btnlogo.webp" alt="goToPopularCafe"></BtnImg>
          </ButtonContainer>
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner2.webp" alt="banner2" />
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
          <BannerImg src="/banner3.webp" alt="banner3" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner4.webp" alt="banner4" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner5.webp" alt="banner5" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner6.webp" alt="banner6" />
        </BannerBox>
      </Slider>
    </Container>
  );
};

export default Banner;
