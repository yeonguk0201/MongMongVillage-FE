import { useState } from 'react';
import { CafeItem, Loading } from '../../components';
import { useGetCafes } from '../../hooks/getCafes';
import { NotFoundPage } from '../NotFoundPage';
import {
  Container,
  Title,
  ShowBubbleContainer,
  ShowInfo,
  TitleContainer,
  SpeechBubble,
  Line,
  GridCafeContainer,
} from './CafeListPage.styles';
import { FaRegQuestionCircle } from 'react-icons/fa';

const CafeListPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  const { data, isLoading, isError } = useGetCafes();

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <NotFoundPage />
  ) : (
    data && (
      <Container>
        <TitleContainer>
          <Title>카페 랭킹 리스트</Title>
          <ShowBubbleContainer>
            <SpeechBubble className={showInfo ? 'show' : ''}>
              리뷰 수와 별점이 높을수록 순위가 높아집니다!
            </SpeechBubble>

            <ShowInfo
              onMouseOver={() => setShowInfo(true)}
              onMouseOut={() => setShowInfo(false)}
            >
              <FaRegQuestionCircle />
            </ShowInfo>
          </ShowBubbleContainer>
        </TitleContainer>
        <Line />
        <GridCafeContainer>
          {data?.cafes.map((cafe, index) => (
            <CafeItem
              cafe={cafe}
              ranking={index + 1}
              key={`cafe+${cafe?._id}`}
            />
          ))}
        </GridCafeContainer>
      </Container>
    )
  );
};

export default CafeListPage;
