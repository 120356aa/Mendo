import React from 'react';

import Youtube from './Youtube.js';
import Twitch from './Twitch.js';

import {
  RecentWrap,
} from '../../Styles/Recent/RecentStyles.js';

const Recent = () => {
  return (
     <RecentWrap>
       <Youtube />
       <Twitch />
     </RecentWrap>
  );
}

export default Recent;