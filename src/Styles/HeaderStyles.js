import styled from 'styled-components';
import MobileLogo from '../Resrouces/mendo-logo-mobile.jpg';

export const HeaderWrap = styled.div`
  width: 100%;
  background-color: #171717;
  height: 54px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  // border-bottom: 1px solid grey;
  -webkit-box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
  -moz-box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
  box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
`;

  // Logo
  export const Logo = styled.div`
    width: 78px;
    height: 78px;
    align-self: flex-start;
    background: url('${MobileLogo}');
  `;

  // Menu Toggle
  export const HamNav = styled.div`
    width: 28px;
    height: 34px;
    cursor: pointer;
    align-self: center;
    margin: 0 18px 0 0;
    // margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  `;

    export const HamLine = styled.div`
      width: 100%;
      border: 3px solid white;
      border-radius: 4px;
    `;