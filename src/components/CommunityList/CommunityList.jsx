import React from 'react';
import { ListContainer } from './CommunityList.styles';
import { CommunityListItem } from '../CommunityListItem';

const CommunityList = ({ currentPageItems }) => {
  const itemsToDisplay = currentPageItems || [];
  return (
    <ListContainer>
      {itemsToDisplay.map((item, idx) => (
        <CommunityListItem key={idx} item={item} />
      ))}
    </ListContainer>
  );
};

export default CommunityList;
