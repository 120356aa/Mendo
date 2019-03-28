import React from 'react';
import axios from 'axios';

import {
  TwitchWrap,
} from '../../Styles/Recent/TwitchStyles.js';

class Twitch extends React.Component {
  state = {
  }

  componentDidMount() {
    this.GetStream();
  }

  GetStream() {
    axios
      .get('')
      .then(res => {
        this.setState({
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <TwitchWrap>
        {/* <ContBox>
          <ContH2>Newest Video</ContH2>
        </ContBox>
        <VidBox>
          <Vid src={this.state.thumbnailMed.url} />
          <Buttons>
            <WatchVid>Watch Vid</WatchVid>
            <Channel>Channel</Channel>
          </Buttons>
        </VidBox> */}
      </TwitchWrap>
    );
  }
}

export default Twitch;