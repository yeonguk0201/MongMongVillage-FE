import { ROUTE } from '../../routes/Routes';
import {
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeInfoContainer,
  DogCafeListItemRating,
  DogCafeListItemTitle,
} from './PopularCafeItem.styles';
import { useNavigate } from 'react-router-dom';
const PopularCafeItem = (cafe) => {
  const { _id, image, name, rating } = cafe?.cafe;
  const navigate = useNavigate();

  const linkToCafe = (id) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <DogCafeListItem
      onClick={() => {
        linkToCafe(_id);
      }}
    >
      <DogCafeListItemImg
        loading="lazy"
        src={image?.length > 0 ? image : '/imges/default.png'}
        alt={`cafe`}
      />
      <DogCafeInfoContainer>
        <DogCafeListItemTitle>{name}</DogCafeListItemTitle>
        <DogCafeListItemRating>
          평균 별점
          <span>{rating}</span>점
        </DogCafeListItemRating>
      </DogCafeInfoContainer>
    </DogCafeListItem>
  );
};

export default PopularCafeItem;
