import React from 'react';

import {
  AboutWrap,
  AboutW,
  ProfileIMG,
  ProfileCont,
  AboutH2,
  AboutP,
} from '../../Styles/About/AboutStyles.js';

const About = () => {
  return (
    <AboutWrap>
      <AboutW>
        <ProfileIMG />
        <ProfileCont>
          <AboutH2>About Me</AboutH2>
          <AboutP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus,
            mollis eu orci in, condimentum vestibulum eros. Sed turpis arcu, consequat ut lectus
            at, pretium placerat risus. Aliquam congue eros vitae luctus condimentum. Curabitur
            fermentum dolor vel enim finibus, a tristique nulla posuere. Etiam et vulputate
            felis. Aenean ac consectetur lectus. Vivamus sit amet elementum felis.
          </AboutP>
        </ProfileCont>
      </AboutW>
    </AboutWrap>
  );
}

export default About;