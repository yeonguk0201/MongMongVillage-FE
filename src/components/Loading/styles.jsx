import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    25%,
    75% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  opacity: 0.5;

  .paw {
    width: 50px;
    height: 50px;
    animation: fadeInOut 2s infinite;
    margin: 2%;
    fill: var(--main-yellow-color);

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 45px;
      height: 45px;
    }

    @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
    }
  }

  .paw:nth-child(2) {
    animation-delay: 0.5s;
  }

  .paw:nth-child(3) {
    animation-delay: 1s;
  }
`;
