import React from 'react';

import {
  FooterWrap,
  FooterInner,
  Copy,
  Socials,
  YT,
  TV,
} from '../../Styles/Footer/FooterStyles.js';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <Socials>
          <YT />
          <TV />
        </Socials>
        <Copy>&copy; 2019 Andrey Yurlov</Copy>
      </FooterInner>
    </FooterWrap>
  );
};

export default Footer;