import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw !important;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 3vh 0;
`;

export const Title = styled.h2`
  font-size: 30px;
  background: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 30%
  );
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 26px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const ShowBubbleContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const ShowInfo = styled.h5`
  margin-left: 5px;
  color: gray;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    svg {
      scale: 0.9;
    }
  }
`;

export const SpeechBubble = styled.div`
  display: none;
  position: absolute;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  &.show {
    display: block;
    top: -100%;
    width: 30vw;
    text-align: center;
  }
`;

export const Line = styled.div`
  border-bottom: 2px solid var(--main-yellow-color);
  width: 90%;
  margin: 10px auto;
  @media screen and (max-width: 767px) {
    margin: 5px auto;
  }
`;

export const GridCafeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 80%;
  margin: 20px auto;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
`;
