import {
  Container,
  BannerImg,
  BannerName,
  BannerSub,
  BannerInfo,
  BannerBox,
  BannerPhoneNumber,
  PopolarCafeBtn,
  BtnImg,
  HoverContainer,
} from './styles';
import { ROUTE } from '../../routes/Routes';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
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
          <BannerImg src="/banner.png" />
          <BannerName>
            멍멍 <br />{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;빌리지
          </BannerName>

          <BannerSub>서울의 모든 애견카페</BannerSub>

          <BannerInfo>
            서울의 모든 애견카페 리뷰와<br></br>애견카페에 관한 다양한 정보를
            확인하세요!
          </BannerInfo>

          <BannerPhoneNumber>mongmongv6@gmail.com</BannerPhoneNumber>
          <HoverContainer>
            <PopolarCafeBtn
              onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}
            >
              눌러서 인기 애견카페 확인!
            </PopolarCafeBtn>
            <BtnImg src="/imges/btnlogo.png" alt="사진"></BtnImg>
          </HoverContainer>
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner2.png" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner3.png" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner4.png" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner5.png" />
          <PopolarCafeBtn
            style={{
              left: '270px',
              width: '680px',
              height: '70px',
              fontSize: '35px',
              backgroundColor: '#FF814C',
            }}
            onClick={() => navigate(ROUTE.CAFE_MAP_PAGE.link)}
          >
            눌러서 강아지랑 같이 갈 애견카페 검색하러 가기!
          </PopolarCafeBtn>
        </BannerBox>
        <BannerBox>
          <BannerImg src="/banner6.png" />
          <BannerName style={{ left: '283px', bottom: '260px' }}>
            Mong Mong Village
          </BannerName>
        </BannerBox>
      </Slider>
    </Container>
  );
};

export default Banner;
