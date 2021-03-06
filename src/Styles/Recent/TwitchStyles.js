import styled from 'styled-components';
import TW from '../../Resrouces/tw-icon.png';

export const TwitchWrap = styled.div`
  width: 360px;
  padding: 64px 0 24px 0;
  margin: 0px auto;
  margin-bottom: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ffffff;
  -webkit-box-shadow: 0px 0px 10px 0px #7D7D7D;
  -moz-box-shadow: 0px 0px 10px 0px #7D7D7D;
  box-shadow: 0px 0px 10px 0px #7D7D7D;
    @media(min-width: 500px){
      width: 400px;
      padding: 70px 0 40px 0;
    }
    @media(min-width: 600px) {
      padding: 80px 0 44px 0;
      margin-bottom: 130px;
    }
    @media(min-width: 900px) { margin-top: 140px; }
    @media(min-width: 1100px) { margin-bottom: 160px; }
`;

  export const TWicon = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    margin-top: -108px;
    background: url('${TW}');
      @media(min-width: 500px) { margin-top: -114px; }
      @media(min-width: 600px) { margin-top: -124px; }
  `;

  export const TwitchBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  `;

    export const Twitchh = styled.img`
      width: 100%;
      height: 180px;
      border-radius: 8px;
    `;

    export const Buttons = styled.div`
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      opacity: 0;
      background-color: #333333;
      position: absolute;
      width: 320px;
      height: 180px;
      border-radius: 8px;
        ${TwitchBox}:hover & { opacity: 0.9; }
    `;

      export const WatchTwitch = styled.button`
        color: #FBFBFB;
        background-color: #333333;
        font-size: 15px;
        font-family: 'Alegreya Sans SC', sans-serif;
        border: 3px solid #FBFBFB;
        padding: 8px 0 8px 0;
        width: 47%;
        cursor: pointer;
          &:hover {
            background-color: #FBFBFB;
            border: 3px solid #FBFBFB;
            color: #333333;
          }
          @media(min-width: 900px) {
            color: #FBFBFB;
              &:hover {
                border: 3px solid #FBFBFB;
                background-color: #FBFBFB;
                color: #333333;
              }
          }
      `;

      export const Channel = styled(WatchTwitch)`
      `;