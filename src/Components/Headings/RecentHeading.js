import React from 'react';
import {
  HeadingBox,
  HeadingBoxInner,
  H1,
  Arrow,
} from '../../Styles/Headings/RecentHeadingStyles.js';

const RecentHeading = () => {
  return (
    <HeadingBox>
      <HeadingBoxInner>
        <H1>Newest Content</H1>
        <Arrow />
      </HeadingBoxInner>
    </HeadingBox>
  );
};

export default RecentHeading;