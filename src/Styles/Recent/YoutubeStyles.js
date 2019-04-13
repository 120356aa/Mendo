import styled from 'styled-components';
import YT from '../../Resrouces/yt-arrow.png';

export const YoutubeWrap = styled.div`
  width: 360px;
  padding: 64px 0 24px 0;
  margin: 0px auto;
  margin-top: 100px;
  margin-bottom: 120px;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #ffffff;
  align-items: center;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 10px 0px #7D7D7D;
  -moz-box-shadow: 0px 0px 10px 0px #7D7D7D;
  box-shadow: 0px 0px 10px 0px #7D7D7D;
    @media(min-width: 500px){
      width: 400px;
      padding: 70px 0 40px 0;
    }
    @media(min-width: 600px) {
      padding: 80px 0 44px 0;
      margin-top: 120px;
      margin-bottom: 140px;
    }
    @media(min-width: 900px) { margin-top: 140px; }
    @media(min-width: 1100px) { margin-bottom: 160px; }
`;

  export const Heading = styled.h2`
    font-size: 46px;
    font-style: italic;
    margin-top: -210px;
    color: #333333;
    text-align: center;
    position: absolute;
    font-family: 'Oswald', sans-serif;
      @media(min-width: 600px) {
        margin-top: -220px;
        font-size: 50px;
      }
      @media(min-width: 900px) {
        align-self: flex-start;
        margin-top: -230px;
      }
  `;

  export const YTArrow = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    margin-top: -108px;
    background: url('${YT}');
      @media(min-width: 500px) { margin-top: -114px; }
      @media(min-width: 600px) { margin-top: -124px; }
  `;

  export const VidBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  `;

    export const Vid = styled.img`
      width: 100%;
      height: 180px;
      border-radius: 8px;
    `;

    export const Title = styled.p`
      color: #333333;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
      margin-top: 14px;
    `;

    export const Buttons = styled.div`
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      opacity: 0;
      background-color: #333333;
      border-radius: 8px;
      position: absolute;
      width: 320px;
      height: 180px;
        ${VidBox}:hover & { opacity: 0.9; }
    `;

      export const WatchVid = styled.button`
        color: #FBFBFB;
        background-color: #333333;
        font-size: 15px;
        font-family: 'Alegreya Sans SC', sans-serif;
        border: 3px solid #FBFBFB;
        width: 140px;
        height: 40px;
        cursor: pointer;
        margin: 0 0 4px 0;
          &:hover {
            background-color: #FBFBFB;
            border: 3px solid #FBFBFB;
            color: #333333;
          }
      `;

      export const Channel = styled(WatchVid)`
        margin: 4px 0 0 0;
      `;