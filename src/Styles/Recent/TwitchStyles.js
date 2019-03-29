import styled from 'styled-components';

export const TwitchWrap = styled.div`
  width: 100%;
  padding: 80px 0 100px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

  export const ContBox = styled.div`
    width: 100%;
  `;

    export const ContH2 = styled.div`
      color: #333333;
      font-size: 32px;
      font-family: 'Alegreya Sans SC', sans-serif;
      text-align: center;
    `;

  export const TwitchBox = styled.div`
    width: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 20px 0 0 0;
  `;

    export const Twitchh = styled.img`
      width: 320px;
      height: 180px;
    `;

    export const Buttons = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
    `;

      export const WatchTwitch = styled.button`
        color: #333333;
        background-color: #FBFBFB;
        font-size: 15px;
        font-family: 'Alegreya Sans SC', sans-serif;
        border: 3px solid #333333;
        padding: 8px 0 8px 0;
        width: 47%;
        cursor: pointer;
          &:hover {
            background-color: #470D70;
            border: 3px solid #470D70;
            color: white;
          }
      `;

      export const Channel = styled(WatchTwitch)`
      `;