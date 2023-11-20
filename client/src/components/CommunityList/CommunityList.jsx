import React from 'react';
import { ListContainer } from './CommunityList.styles';
import { CommunityListItem } from '../CommunityListItem';

const CommunityList = ({ filteredListBySearch, handlePostClick }) => {
  return (
    <ListContainer>
      {filteredListBySearch.map((item, idx) => (
        <CommunityListItem
          key={idx}
          item={item}
          handlePostClick={handlePostClick}
        />
      ))}
    </ListContainer>
  );
};

export default CommunityList;
