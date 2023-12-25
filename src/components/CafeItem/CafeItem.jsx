import { useNavigate } from 'react-router-dom';
import {
  CafeListItemContainer,
  CafeRanking,
  CafeContainer,
  CafeImg,
  ItemContainer,
  CafeTitle,
  Info,
  CafeImgContainer,
} from './CafeItem.styles';
import { ROUTE } from '../../routes/Routes';
import { HiPhone } from 'react-icons/hi';
import { GoClockFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

const CafeItem = ({ cafe, ranking }) => {
  const { _id, image, name, rating, road_addr, operating_time } = cafe;

  const navigate = useNavigate();

  const linkToCafe = () => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${_id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <CafeListItemContainer onClick={linkToCafe}>
      <CafeRanking>{ranking}</CafeRanking>
      <CafeContainer>
        <CafeImgContainer>
          <CafeImg
            src={image.length > 0 ? image : '/imges/default.png'}
            alt={`cafe ${ranking}`}
          />
        </CafeImgContainer>
        <ItemContainer>
          <CafeTitle>{name}</CafeTitle>
          <Info>
            <FaStar />
            <span>{rating === 0 ? '-' : rating}</span>
          </Info>
          <Info>
            <HiPhone />
            <span>{road_addr}</span>
          </Info>
          <Info>
            <GoClockFill />
            <span>{operating_time}</span>
          </Info>
        </ItemContainer>
      </CafeContainer>
    </CafeListItemContainer>
  );
};

export default CafeItem;
