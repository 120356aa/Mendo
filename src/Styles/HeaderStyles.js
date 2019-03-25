import styled from 'styled-components';

export const HeaderWrap = styled.div`
  width: 100%;
  border: 1px solid blue;
  background-color: #171717;
  height: 56px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

  export const Logo = styled.div`
    width: 100px;
    height: 100%;
    border: 1px solid red;
  `;

  export const HamNav = styled.div`
    width: 30px;
    height: 34px;
    // border: 1px solid red;
    align-self: center;
    margin: 0 18px 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  `;

    export const HamLine = styled.div`
      width: 100%;
      border: 2px solid white;
      border-radius: 4px;
    `;