import styled from 'styled-components';

export const RecentWrap = styled.div`
  width: 100%;
  background-color: #FBFBFB;
  position: absolute;
  // display: flex;
  // flex-flow: column nowrap;
  // align-items: center;
`;

  export const RecentW = styled.div`
      @media(min-width: 900px) {
        border: 1px solid red;
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
      }
      @media(min-width: 1100px) { 
        width: 1100px;
        margin: 0px auto;
      }
  `;