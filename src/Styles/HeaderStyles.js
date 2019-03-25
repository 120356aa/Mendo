import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  // Logo
  export const Logo = styled.div`
    width: 100px;
    height: 100%;
    border: 1px solid red;
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
        &:first-child{
          padding-top: 12px;
        }
        &:last-child {
          padding-bottom: 12px;
        }
    `;