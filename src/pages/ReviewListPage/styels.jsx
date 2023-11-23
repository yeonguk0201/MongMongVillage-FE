import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 40px auto;
  padding: 0 10px;
  background: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 30%
  );
`;

export const ReviewListContainer = styled.div`
  width: 1280px !important;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 20px;
  border-top: solid 3px var(--main-yellow-color);
`;
