import React from 'react';
import axios from 'axios';

import {
  TwitchWrap,
  TWicon,
  ContBox,
  ContH2,
  TwitchBox,
  Twitchh,
  Buttons,
  WatchTwitch,
  Channel,
} from '../../Styles/Recent/TwitchStyles.js';
import TwitchOfflineSM from '../../Resrouces/twitch-offline-sm.jpg';

class Twitch extends React.Component {
  state = {
    online: false,
    title: '',
    thumbnail: '',
    viewerCount: '',
  }

  componentDidMount() {
    this.GetStream();
  }

  GetStream() {
    axios({
      method: 'get',
      url: 'https://api.twitch.tv/helix/streams?user_login=mendokusaii',
      headers: {
        "client-id": process.env.REACT_APP_TWITCH_API,
      },
    })
    .then(res => {
      if (res.data.data.length === 0) {
        this.setState({ online: false })
      } else {
        this.setState({
          title: res.data.data[0].title,
          thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_mendokusaii-320x180.jpg',
          viewerCount: res.data.data[0].viewer_count,
        })
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <TwitchWrap>
        {/* <ContBox>
          <ContH2>Twitch Stream</ContH2>
        </ContBox> */}
        <TWicon></TWicon>
        <TwitchBox>
          <Twitchh src={!this.state.online ? TwitchOfflineSM : this.state.thumbnail}/>
          <Buttons>
            <WatchTwitch>Watch Stream</WatchTwitch>
          </Buttons>
        </TwitchBox>
      </TwitchWrap>
    );
  }
}

export default Twitch;