import { useState, useEffect } from 'react';
import { LikeContainer, LikeIcon } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';
import { useGetMyLike } from '../../hooks/getMyLike';
import { showAlert } from '../../util/showAlert';

const CommunityPostLike = ({ likeCount, setLikeCount, boardId }) => {
  const userId = localStorage.getItem('userId');
  const [islikeClick, setIsLikeClick] = useState(false);
  const { data: myLikes, refetch: refetchLike } = useGetMyLike();

  /* 내가 좋아요 한 리스트 불러와서 해당 글을 좋아요 한 글인지 비교 */
  useEffect(() => {
    if (userId) refetchLike();

    if (myLikes && boardId) {
      myLikes?.forEach((item) => {
        if (item?.board_id?._id === boardId && boardId) {
          setIsLikeClick(true);
        }
      });
    }
  }, [myLikes, boardId, userId, refetchLike]);

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  const handleLikeClick = () => {
    if (userId) {
      putBoardLike();
      setLikeCount((prev) => (islikeClick ? prev - 1 : prev + 1));
      setIsLikeClick(!islikeClick);
    } else {
      showAlert('', '로그인 후 좋아요 기능을 이용해주세요.', 'warning');
    }
  };

  return (
    <LikeContainer
      onClick={handleLikeClick}
      islikeclick={islikeClick ? 'true' : 'false'}
    >
      <LikeIcon islikeclick={islikeClick ? 'true' : 'false'} />
      {likeCount}
    </LikeContainer>
  );
};

export default CommunityPostLike;
