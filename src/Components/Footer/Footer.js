import React from 'react';

import {
  FooterWrap,
  FooterInner,
  Copy,
} from '../../Styles/Footer/FooterStyles.js';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <Copy>&copy; 2019 Andrey Yurlov</Copy>
      </FooterInner>
    </FooterWrap>
  );
};

export default Footer;