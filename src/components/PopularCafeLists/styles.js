import styled from 'styled-components';

export const Container = styled.main`
  width: 70%;
  margin: 0 auto;
`;

export const GridCafe = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 50px;
`;

export const CafeListItemContainer = styled.article`
  display: flex;
  width: 100%;
  padding: 25px 0;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const CafeRanking = styled.div`
  width: 50px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const CafeContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const CafeImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
  padding-right: 10px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 22px;
`;

export const CafeTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StarContainer = styled.div`
  color: gray;
`;

export const StarRating = styled.span`
  color: gray;
`;

export const Info = styled.div`
  color: gray;
  padding-top: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const PageTitle = styled.h1`
  font-size: 38px;
  padding: 80px 0 0 0;
  display: inline-block;
`;

export const ShowBubbleContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const SpeachBubble = styled.div`
  display: none;
  position: absolute;
  top: -376%;
  left: 186%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  padding: 10px;
  padding-top: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 1;

  &::after {
    transform: rotate(180deg);
    position: absolute;
    top: 104%;
    left: 8%;
    border: solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: #f0f0f0;
    border-width: 10px;
    pointer-events: none;
    content: ' ';
  }
`;

export const ShowInfo = styled.h5`
  margin-left: 5px;
  color: gray;
  cursor: pointer;

  &:hover + ${SpeachBubble} {
    display: block;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  background-color: black;
  margin-top: 20px;
`;
