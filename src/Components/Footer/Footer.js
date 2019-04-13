import React from 'react';

import {
  FooterWrap,
  FooterInner,
  Section,
  Sitemap,
  Socials,
  Status,
  Copyright,
  H4,
  P,
} from '../../Styles/Footer/FooterStyles.js';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <Section>
          <Sitemap>
            <H4>Sitemap</H4>
            <P>Home</P>
            <P>About</P>
            <P>Community</P>
            <P>Contact</P>
          </Sitemap>
          <Socials>
            <H4>Socials</H4>
            <P>Twitter</P>
            <P>Youtube</P>
            <P>Twitch</P>
            <P>Discord</P>
          </Socials>
        </Section>
        <Section>
          <Status>
            <H4>Status</H4>
            <P>Twitch - Offline</P>
          </Status>
        </Section>
      </FooterInner>
    </FooterWrap>
  );
};

export default Footer;