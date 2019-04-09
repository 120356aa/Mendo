import styled from 'styled-components';
import TW from '../../Resrouces/tw-icon.png';

export const TwitchWrap = styled.div`
  width: 400px;
  padding: 70px 0 46px 0;
  margin: 0px auto;
  margin-bottom: 120px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ffffff;
  -webkit-box-shadow: 0px 0px 10px 0px #7D7D7D;
  -moz-box-shadow: 0px 0px 10px 0px #7D7D7D;
  box-shadow: 0px 0px 10px 0px #7D7D7D;
    @media(min-width: 600px) { padding: 100px 0 120px 0; }
    @media(min-width: 900px) { background-color: #FBFBFB; }
    @media(min-width: 1100px) {
      width: 50%;
      align-items: flex-end;
      padding: 140px 40px 160px 0;
    }
`;

  export const TWicon = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    margin-top: -114px;
    background: url('${TW}');
  `;

  export const TwitchBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
      @media(min-width: 600px) { margin: 60px 0 0 0;}
      @media(min-width: 900px) { margin: 20px 0 0 0;}
      @media(min-width: 1100px) {
        width: 380px;
        height: 240px;
      }
  `;

    export const Twitchh = styled.img`
      width: 100%;
      height: 180px;
        @media(min-width: 1100px) {
          width: 380px;
          height: 240px;
        }
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
        ${TwitchBox}:hover & {
          opacity: 0.9;
        }
        @media(min-width: 1100px) { justify-content: flex-start; }
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
            color: #333333;
            background-color: #FBFBFB;
            border: 3px solid #333333;
              &:hover {
                border: 3px solid #6F11B1;
                background-color: #6F11B1;
                color: #FBFBFB;
              }
          }
          @media(min-width: 1100px) {
            width: auto;
            padding: 8px 16px 8px 16px;
          }

      `;

      export const Channel = styled(WatchTwitch)`
        @media(min-width: 1100px) { margin-left: 20px; }
      `;