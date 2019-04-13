import styled from 'styled-components';
import BannerIMG from '../../Resrouces/BannerIMG.svg';
import BannerIMG2 from '../../Resrouces/banner.jpg';
import Pepe from '../../Resrouces/pepe.png';

export const BannerWrap = styled.div`
  width: 100%;
  height: 600px;
  background: url('${BannerIMG2}');
  background-size: cover;
  opacity: 0.7;
    @media(min-width: 600px) { height: 700px; }
    @media(min-width: 1100px) { height: 800px; }
`;

export const BannerCont = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

  export const BannerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: -600px;
      @media(min-width: 600px) { margin-top: -700px; }
      @media(min-width: 1100px) { margin-top: -780px; }
  `;

    export const BannerH1 = styled.h1`
      font-family: 'Alegreya Sans SC', sans-serif;
      color: #FAFAFA;
      font-size: 66px;
      font-weight: 900;
      text-align: center;
      text-shadow: 1px 1px 8px #303030;
      letter-spacing: 2px;
        @media(min-width: 800px) { font-size: 72px; }
        @media(min-width: 1100px) { font-size: 80px; }
    `;

  export const BannerButtons = styled.div`
    display: flex;
    margin-top: 40px;
      @media(min-width: 1100px) { margin-top: 40px; }
  `;

    export const BannerButton = styled.div`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    `;

      export const BannerTwitch = styled.button`
        padding: 10px 0 10px 0;
        margin-right: 5px;
        width: 120px;
        border: 3px solid #ffffff;
        background-color: transparent;
        color: #ffffff;
        font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 16px;
        font-weight: 800;
        text-shadow: 1px 1px 8px #303030;
        letter-spacing: 1px;
        cursor: pointer;
          &:hover {
            background-color: #ffffff;
            color: #303030;
            text-shadow: none;
          }
      `;

      export const BannerYoutube = styled(BannerTwitch)`
        margin-left: 5px;
      `;

      export const ButtonHover = styled.div`
        margin-top: 60px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        position: absolute;
        display: none;
          @media(min-width: 800px) {
            ${BannerButton}:hover & {
              display: flex;
            }
          }
      `;

        export const Triangle = styled.div`
          width: 0; 
          height: 0; 
          border-left: 16px solid transparent;
          border-right: 16px solid transparent;
          border-bottom: 16px solid #8dbe55;
        `;

        export const ButtonBox = styled.div`
          padding: 10px 14px 10px 14px;
          // width: 200px;
          background-color: #8dbe55;
          border: 1px solid #8dbe55;
          border-radius: 6px;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          display: flex;
        `;

        export const Pepega = styled.div`
          background: url('${Pepe}');
          margin: -2px 0 0 8px;
          width: 18px;
          height: 18px;
        `;