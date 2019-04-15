import styled from 'styled-components';

import YToff from '../../Resrouces/yt-off.svg';
import YTon from '../../Resrouces/yt-on.svg';
import TVoff from '../../Resrouces/tv-off.svg';
import TVon from '../../Resrouces/tv-on.svg';
import DCoff from '../../Resrouces/dc-off.svg';
import DCon from '../../Resrouces/dc-on.svg';

export const FooterWrap = styled.div`
  width: 100%;
  background-color: #292929;
  padding: 40px 0 40px 0;
  position: relative;
  z-index: 1;
    // @media(min-width: 600px) { padding: 80px 0 80px 0;}
`;

  export const FooterInner = styled.div`
    padding: 0 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
      @media(min-width: 500px) {
        padding: 0 40px 0 40px;
      }
  `;

    export const Copy = styled.div`
      font-size: 14px;
      font-family: 'Open Sans', sans-serif;
      color: #F4F4F4;
        @media(min-width: 500px) { font-size: 15px; }
      // padding: 16px 0 0 0;
    `;

    export const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    `;

      export const YT = styled.div`
        width: 34px;
        height: 24px;
        background: url('${YToff}');
        margin-right: 14px;
          &:hover { background: url('${YTon}'); }
          @media(min-width: 500px) {
            width: 40px;
            height: 28px;
          }
      `;

      export const TV = styled.div`
        width: 25px;
        height: 26px;
        background: url('${TVoff}');
          &:hover { background: url('${TVon}'); }
          @media(min-width: 500px) {
            width: 30px;
            height: 31px;
          }
      `;