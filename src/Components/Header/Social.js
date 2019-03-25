import React from 'react';

import {
  SocialBox,
  Social,
  Twitch,
  Youtube,
  Twitter,
} from '../../Styles/Header/SocialStyles.js';

const SocialComp = () => {
  return (
    <SocialBox>
      <Social>
        <Twitch />
        <Youtube />
        <Twitter />
      </Social>
    </SocialBox>
  );
}

export default SocialComp;