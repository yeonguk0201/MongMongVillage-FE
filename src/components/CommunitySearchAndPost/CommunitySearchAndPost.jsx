import React, { useRef } from 'react';
import {
  SearchAndPostContainer,
  SearchContainer,
  SearchInputBox,
  PostBTN,
  SearchButton,
  SearchInput,
  Space,
} from './CommunitySearchAndPost.styles';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';

const CommunitySearchAndPost = ({
  handleSearchInputChange,
  handleNewPostClick,
}) => {
  const searchInputRef = useRef(null);

  const handleSearchButtonClick = () => {
    handleSearchInputChange(searchInputRef.current.value);
    searchInputRef.current.value = '';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchInputChange(searchInputRef.current.value);
      searchInputRef.current.value = '';
    }
  };

  return (
    <SearchAndPostContainer>
      <Space />
      <SearchContainer>
        <SearchInputBox>
          <SearchButton onClick={handleSearchButtonClick}>
            <FaSearch size={'20px'} />
          </SearchButton>
          <SearchInput
            type="text"
            placeholder="커뮤니티 게시글 검색"
            onKeyDown={handleKeyPress}
            ref={searchInputRef}
          />
        </SearchInputBox>
      </SearchContainer>
      <PostBTN onClick={handleNewPostClick}>
        <span>글작성</span>
        <FaPencilAlt size="20px" />
      </PostBTN>
    </SearchAndPostContainer>
  );
};

export default CommunitySearchAndPost;
