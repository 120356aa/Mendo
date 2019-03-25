import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    // border: 1px solid red;
    // margin: 5px 0 0 6px;
    background: url('${MobileLogo}');
  `;

  // Menu Toggle
  export const HamNav = styled.div`
    width: 28px;
    height: 34px;
    cursor: pointer;
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

  // Mobile Menu
  export const MobileMenu = styled.div`
    width: 180px;
    border: 1px solid #F9F9F9;
    border-radius: 6px 0 6px 6px;
    background-color: #F9F9F9;
    position: absolute;
    right: 26px;
    top: 82px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  `;

    export const MobileNav = styled.div`

    `;

    export const NavTriangle = styled.div`
      width: 0;
      height: 0;
      border-bottom: 18px solid #F9F9F9;
      border-left: 18px solid transparent;
      position: absolute;
      align-self: flex-end;
      right: -1px;
      margin-top: -68px;
    `;

    export const StyledLink = styled(Link)`
      color: black;
      padding: 6px 0 6px 0;
      text-decoration: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
        &:hover { color: #8dbe55; }
        &:nth-child(2){
          padding-top: 12px;
        }
        &:last-child {
          padding-bottom: 12px;
        }
    `;