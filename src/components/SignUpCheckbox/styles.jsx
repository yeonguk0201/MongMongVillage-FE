import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 20px;

  @media screen and (max-width: 767px) {
    margin: 10px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const CheckboxText = styled.p`
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Space = styled.div`
  width: 5%;
`;

export const DetailText = styled.span`
  color: orange;
  text-decoration: underline;
  margin: 0 3px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin: 0 2px;
  }
`;
