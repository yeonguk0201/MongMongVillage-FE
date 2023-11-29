import React, { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';
import { FaHeart } from 'react-icons/fa';

const CommunityPostLike = ({ like, selectedPost }) => {
  const [islikeClick, setIsLikeClick] = useState(false);
  const boardId = selectedPost?.board?._id;
  const [likeCount, setLikeCount] = useState(like);
  const [userId, setUserId] = useState(null);

  const handleLikeClick = () => {
    if (userId) {
      setIsLikeClick(!islikeClick);
    } else {
      alert('로그인 후 좋아요 기능을 이용해주세요.');
    }
  };

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));

    if (boardId) {
      putBoardLike(boardId);
      setLikeCount((prevLikeCount) =>
        islikeClick ? prevLikeCount + 1 : prevLikeCount - 1,
      );
    }
  }, [boardId, islikeClick, putBoardLike]);

  return (
    <LikeContainer onClick={handleLikeClick} islikeclick={islikeClick}>
      <div style={{ marginBottom: '14px' }}>
        <FaHeart color="red" />
      </div>
      {userId !== null ? <p>{islikeClick ? like + 1 : like}</p> : <>{like}</>}
    </LikeContainer>
  );
};

export default CommunityPostLike;
