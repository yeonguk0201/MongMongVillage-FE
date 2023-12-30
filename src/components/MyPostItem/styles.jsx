import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 5px 0;
    margin: 10px 0;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 10px 0;
`;

export const Content = styled.p`
  line-height: 2;
  color: gray;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: break-spaces;

  @media screen and (max-width: 767px) {
    line-height: 1.3;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const Count = styled.span`
  margin-right: 15px;
`;

export const DateText = styled.span`
  font-size: 12px;
  color: gray;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;
