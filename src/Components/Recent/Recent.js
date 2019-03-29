import React from 'react';

import Youtube from './Youtube.js';
import Twitch from './Twitch.js';

import {
  RecentWrap,
  RecentW,
} from '../../Styles/Recent/RecentStyles.js';

const Recent = () => {
  return (
     <RecentWrap>
      <RecentW>
        <Youtube />
        <Twitch />
      </RecentW>
     </RecentWrap>
  );
}

export default Recent;