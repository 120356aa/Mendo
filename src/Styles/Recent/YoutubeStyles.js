import styled from 'styled-components';
import YT from '../../Resrouces/yt-arrow.png';

export const YoutubeWrap = styled.div`
  width: 400px;
  padding: 70px 0 46px 0;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 160px;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #ffffff;
  align-items: center;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 10px 0px #7D7D7D;
  -moz-box-shadow: 0px 0px 10px 0px #7D7D7D;
  box-shadow: 0px 0px 10px 0px #7D7D7D;
    @media(min-width: 600px) {
      padding: 80px 0 60px 0;
      margin-top: 130px;
      margin-bottom: 170px;
    }
    @media(min-width: 900px) {

    }
    @media(min-width: 1100px) {
      margin-top: 160px;
      margin-bottom: 160px;
    }
`;

  export const YTArrow = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    margin-top: -114px;
    background: url('${YT}');
      @media(min-width: 600px) {
        margin-top: -124px;
      }
  `;

  export const VidBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
      @media(min-width: 600px) { margin: 0px 0 0 0;}
      @media(min-width: 900px) { }
      @media(min-width: 1100px) {
      }
  `;

    export const Vid = styled.img`
      width: 100%;
      height: 180px;
        @media(min-width: 1100px) {
        }
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
      position: absolute;
      width: 320px;
      height: 180px;
        ${VidBox}:hover & {
          opacity: 0.9;
        }
        // @media(min-width: 1100px) { justify-content: flex-start; }
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
          @media(min-width: 1100px) {
            // width: auto;
            // padding: 8px 16px 8px 16px;
          }
      `;

      export const Channel = styled(WatchVid)`
        margin: 4px 0 0 0;
      `;