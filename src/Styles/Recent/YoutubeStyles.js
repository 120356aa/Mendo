import styled from 'styled-components';

export const YoutubeWrap = styled.div`
  width: 100%;
  padding: 80px 0 100px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  // -webkit-box-shadow: 0px 0px 8px 0px rgba(56,56,56,0.8);
  // -moz-box-shadow: 0px 0px 8px 0px rgba(56,56,56,0.8);
  // box-shadow: 0px 0px 8px 0px rgba(56,56,56,0.8);
    @media(min-width: 600px) { padding: 100px 0 120px 0; }
    @media(min-width: 900px) {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    @media(min-width: 1100px) {
      width: 50%;
      align-items: flex-start;
      padding: 140px 0 160px 40px;
    }
`;

  export const ContBox = styled.div`
    width: 320px;
      @media(min-width: 1100px) { width: 380px; }
  `;

    export const ContH2 = styled.div`
      color: #333333;
      font-size: 34px;
      font-family: 'Alegreya Sans SC', sans-serif;
      text-align: center;
        @media(min-width: 600px) { font-size: 40px;}
        @media(min-width: 900px) { text-align: left;}
    `;

  export const VidBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 30px 0 0 0;
      @media(min-width: 600px) { margin: 60px 0 0 0;}
      @media(min-width: 900px) { margin: 20px 0 0 0;}
      @media(min-width: 1100px) {
        width: 380px;
        height: 260px;
      }
  `;

    export const Vid = styled.img`
      width: 100%;
      height: 180px;
        @media(min-width: 1100px) {
          width: 380px;
          height: 260px;
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
        @media(min-width: 1100px) { justify-content: flex-start; }
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
            width: auto;
            padding: 8px 16px 8px 16px;
          }
      `;

      export const Channel = styled(WatchVid)`
        margin: 4px 0 0 0;
          @media(min-width: 1100px) { margin-left: 20px; }
      `;