import styled from 'styled-components';
import MobileLogo from '../../Resrouces/mendo-logo-mobile.jpg';
import DesktopLogo from '../../Resrouces/mendo-logo-desktop.jpg';

export const HeaderWrap = styled.div`
  width: 100%;
  background-color: #292929;
  height: 54px;
  position: fixed;
  z-index: 2;
  // -webkit-box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
  // -moz-box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
  // box-shadow: 0px 3px 6px -1px rgba(59,59,59,1);
`;

  export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
      @media(min-width: 660px) {
        justify-content: flex-start;
      }
      @media(min-width: 1960px) {
        width: 1100px;
        margin: 0px auto;
      }
  `;

  // Logo
  export const Logo = styled.div`
    width: 54px;
    height: 54px;
    align-self: flex-start;
    background: url('${MobileLogo}');
      @media(min-width: 1100px) {
        width: 100px;
        height: 100px;
        background: url('${DesktopLogo}');
      }
  `;

  // Menu Toggle
  export const HamNav = styled.div`
    width: 28px;
    height: 30px;
    cursor: pointer;
    align-self: center;
    margin: 0 18px 0 0;
    // margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
      @media(min-width: 600px) { 
        display: none;
      }
  `;

    export const HamLine = styled.div`
      width: 100%;
      border: 2px solid white;
      border-radius: 4px;
    `;