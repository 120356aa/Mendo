import styled from 'styled-components';

export const FooterWrap = styled.div`
  width: 100%;
  background-color: #292929;
  padding: 60px 0 60px 0;
  position: relative;
  z-index: 1;
`;

  export const FooterInner = styled.div`
    padding: 0 50px 0 50px;
      @media(min-width: 500px) {
        padding: 0 80px 0 80px;
      }
  `;

    export const Section = styled.div`
      display: flex;
      justify-content: space-between;
        &:last-child {
          margin-top: 60px;
        }
    `;

      export const Sitemap = styled.div`
        width: 100px;
      `;

      export const Socials = styled.div`
        width: 100px;
      `;

      export const Status = styled.div`
        width: 120px;
      `;

      export const Copyright = styled.div`
        text-align: right;
        align-self: flex-end;
      `;

      export const H4 = styled.div`
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        color: #F4F4F4;
        width: 70px;
        height: 30px;
        border-bottom: 1px solid #F4F4F4;
      `;

      export const P = styled.div`
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        color: #F4F4F4;
        padding: 16px 0 0 0;
      `;