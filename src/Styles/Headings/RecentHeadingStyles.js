import styled from 'styled-components';

export const HeadingBox = styled.div`
  width: 100%;
  background-color: #8dbe55;
  position: relative;
  z-index: 1;
`;

  export const HeadingBoxInner = styled.div`
    width: 100%;
    padding: 30px 0 30px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  `;

    export const H1 = styled.div`
      font-size: 30px;
      font-family: 'Oswald', sans-serif;
      text-align: center;
      font-style: italic;
      color: #ffffff;
        @media(min-width: 900px) { font-size: 34px; }
    `;

    export const Arrow = styled.div`
      width: 0; 
      height: 0; 
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-top: 40px solid #8dbe55;
      margin: 0px auto;
      position: absolute;
      margin-top: 44px;
        @media(min-width: 900px) { margin-top: 54px; }
    `;