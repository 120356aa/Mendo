import styled from 'styled-components';

export const TwitchWrap = styled.div`
  width: 100%;
  padding: 80px 0 100px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #6F11B1;
    @media(min-width: 600px) { padding: 100px 0 120px 0; }
    @media(min-width: 900px) { background-color: #FBFBFB; }
    @media(min-width: 1100px) {
      width: 50%;
      align-items: flex-end;
      padding: 140px 40px 160px 0;
    }
`;

  export const ContBox = styled.div`
    width: 320px;
      @media(min-width: 1100px) { width: 380px; }
  `;

    export const ContH2 = styled.div`
      color: #FBFBFB;
      font-size: 34px;
      font-family: 'Alegreya Sans SC', sans-serif;
      text-align: center;
        @media(min-width: 600px) { font-size: 40px;}
        @media(min-width: 900px) {
          text-align: left;
          color: #333333;
        }
    `;

  export const TwitchBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 40px 0 0 0;
      @media(min-width: 600px) { margin: 60px 0 0 0;}
      @media(min-width: 900px) { margin: 20px 0 0 0;}
      @media(min-width: 1100px) {
        width: 380px;
        height: 260px;
      }
  `;

    export const Twitchh = styled.img`
      width: 100%;
      height: 180px;
        @media(min-width: 1100px) {
          width: 380px;
          height: 260px;
        }
    `;

    export const Buttons = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
        @media(min-width: 1100px) { justify-content: flex-start; }
    `;

      export const WatchTwitch = styled.button`
        color: #FBFBFB;
        background-color: #6F11B1;
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