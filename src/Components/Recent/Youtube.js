import React from 'react';

import {
  YoutubeWrap,
  ContBox,
  ContH2,
  VidBox,
} from '../../Styles/Recent/YoutubeStyles.js';

class Youtube extends React.Component {

  render() {
    return (
      <YoutubeWrap>
        <ContBox>
          <ContH2>Newest Youtube Video</ContH2>
        </ContBox>
        <VidBox>

        </VidBox>
      </YoutubeWrap>
    );
  }
}

export default Youtube;