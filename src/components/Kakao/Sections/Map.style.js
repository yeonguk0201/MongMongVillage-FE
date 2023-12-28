import styled from 'styled-components';

export const MapContainer = styled.div`
  h2 {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 24px;
  }
`;

export const CafeList = styled.div`
  height: 600px !important;
  width: 25%;
  float: left;
  padding: 20px;
  border: 1px solid #eee;
  overflow-y: auto;
  max-height: 600px;
  text-align: center;

  .searchResult {
    display: flex;
    padding: 10px;
    margin: 10px 0;
    span {
      font-weight: bold;
      margin: 0 5px;
    }
  }

  .noResult {
    svg {
      margin: 50px 0 20px 0;
    }
    p {
      padding: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 95%;
    height: 300px !important;
    margin: 10px auto;
    padding: 2%;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
      line-height: 80%;
    }

    .searchResult {
      font-size: 14px;
      margin: 5px 0;
    }
    .noResult {
      svg {
        scale: 0.7;
        margin: 5px 0;
      }
    }
  }
`;

export const CafeListItem = styled.div`
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fef9ea;
  }

  .cafename {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    display: flex;
    margin: 10px 0;
    font-size: 14px;
    color: #555;
    word-break: keep-all;

    svg {
      margin-right: 5px;
      fill: lightgray;
    }
  }

  @media screen and (max-width: 767px) {
    .cafename {
      font-size: 16px;
    }
  }
`;
