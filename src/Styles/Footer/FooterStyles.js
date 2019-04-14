import styled from 'styled-components';

export const FooterWrap = styled.div`
  width: 100%;
  background-color: #292929;
  padding: 40px 0 40px 0;
  position: relative;
  z-index: 1;
    // @media(min-width: 600px) { padding: 80px 0 80px 0;}
`;

  export const FooterInner = styled.div`
    padding: 0 40px 0 40px;
    display: flex;
    justify-content: space-between;
      // @media(min-width: 500px) {
      //   padding: 0 80px 0 80px;
      // }
      // @media(min-width: 600px) {
      //   padding: 0 100px 0 100px;
      // }
  `;

    export const Copy = styled.div`
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
      color: #F4F4F4;
      // padding: 16px 0 0 0;
    `;