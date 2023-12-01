import styled from 'styled-components';

export const MapContainer = styled.div`
  h2 {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 24px;
  }

  .noResult {
    text-align: center;
    svg {
      margin: 50px 0 20px 0;
    }

    p {
      padding: 10px;
    }
  }

  .searchResult {
    display: flex;
    padding: 10px;
    margin: 10px 0;
    span {
      font-weight: bold;
      margin: 0 5px;
    }
  }
`;

export const CafeList = styled.div`
  height: 600px !important;
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const CafeListItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fef9ea;
  }

  .cafename {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
    color: #555;
  }
`;
