import styled from 'styled-components';

import TwitchOff from '../../Resrouces/twt-sm-off.png';
import TwitchOn from '../../Resrouces/twt-sm-on.png';
import YoutubeOff from '../../Resrouces/yt-sm-off.png';
import YoutubeOn from '../../Resrouces/yt-sm-on.png';
import TwitterOff from '../../Resrouces/tw-sm-off.png';
import TwitterOn from '../../Resrouces/tw-sm-on.png';

export const SocialBox = styled.div`
`;

  export const Social = styled.div`
    display: flex;
    margin-right: 14px;
    margin-left: 18px;
  `;

    export const Twitch = styled.div`
      width: 30px;
      height: 30px;
      margin: 12px 0 0 0;
      cursor: pointer;
      background: url('${TwitchOff}');
        &:hover { background: url('${TwitchOn}'); }
    `;

    export const Youtube = styled(Twitch)`
      margin: 12px 14px 0 12px;
      background: url('${YoutubeOff}');
        &:hover { background: url('${YoutubeOn}'); }
    `;

    export const Twitter = styled(Twitch)`
      margin-top: 13px;
      background: url('${TwitterOff}');
        &:hover { background: url('${TwitterOn}'); }
    `;