import React from 'react';

import {
  Social,
  Twitch,
  Youtube,
  Twitter,
} from '../../Styles/Header/SocialStyles.js';

const SocialComp = () => {
  return (
    <Social>
      <Twitch />
      <Youtube />
      <Twitter />
    </Social>
  );
}

export default SocialComp;