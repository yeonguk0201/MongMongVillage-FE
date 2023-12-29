import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 10px 0;
    margin: 5px 0;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 10px 0;
  svg {
    margin-left: 5px;
  }
  @media screen and (max-width: 767px) {
    padding: 5px 0;
    font-size: 16px;
    svg {
      scale: 0.8;
    }
  }
`;

export const Content = styled.p`
  color: gray;
  line-height: 2;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  white-space: break-spaces;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const DateText = styled.span`
  font-size: 10px;
`;
