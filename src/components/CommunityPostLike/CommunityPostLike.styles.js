import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const LikeIcon = styled(FaHeart)`
  color: ${(props) => (props.islikeclick === 'true' ? 'red' : 'gray')};

  transition: color 0.3s ease;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border-radius: 40px;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.islikeclick === 'true' ? 'var(--main-yellow-color)' : 'white'};
  border: ${(props) =>
    props.islikeclick === 'true'
      ? '2px solid var(--main-yellow-color)'
      : '2px solid lightgray'};
  cursor: pointer;
  svg {
    margin-top: 10px;
  }

  &:hover {
    ${LikeIcon} {
      width: 30px;
      height: 30px;
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    font-size: 12px;
    svg {
      margin-top: 5px;
    }
  }
`;
