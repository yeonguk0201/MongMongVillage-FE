import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  .SearchResult {
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    span {
      font-weight: 900;
    }
  }
`;

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? '#007bff' : '#f2f2f2')};
  color: ${(props) => (props.active ? '#fff' : '#333')};

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#ddd')};
    color: ${(props) => (props.active ? '#fff' : '#333')};
  }
`;