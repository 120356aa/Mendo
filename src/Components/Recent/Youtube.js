import React from 'react';
import axios from 'axios';
import Media from 'react-media';

import {
  YoutubeWrap,
  ContBox,
  ContH2,
  VidBox,
  Vid,
  Title,
  Buttons,
  WatchVid,
  Channel,
} from '../../Styles/Recent/YoutubeStyles.js';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

class Youtube extends React.Component {
  state = {
    desc: '',
    publishedAt: '',
    thumbnailHigh: [],
    thumbnailMed: [],
    title: '',
  }

  componentDidMount() {
    this.GetVideo();
  }

  GetVideo() {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API}Id=UCg9bCZl8859x6QrSfGbdOnw&part=snippet,id&order=date&maxResults=1`)
      .then(res => {
        this.setState({
          desc: res.data.items[0].snippet.description,
          publishedAt: res.data.items[0].snippet.publishedAt,
          title: res.data.items[0].snippet.title,
          thumbnailHigh: res.data.items[0].snippet.thumbnails.high,
          thumbnailMed: res.data.items[0].snippet.thumbnails.medium,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      
      <YoutubeWrap>
        {console.log(this.state.thumbnailHigh)}
        <ContBox>
          <ContH2>Newest Video</ContH2>
        </ContBox>
        <VidBox>
          <Vid src={this.state.thumbnailMed.url} />
          <Buttons>
            <WatchVid>Watch Vid</WatchVid>
            <Channel>Channel</Channel>
          </Buttons>
          
          {/* <Time>{this.GetVidTime()}</Time> */}
          {/* <Title>{this.state.title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'')}</Title> */}
        </VidBox>
      </YoutubeWrap>
    );
  }
}

export default Youtube;