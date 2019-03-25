import React from 'react';
import { 
  HeaderWrap,
  Logo,
  HamNav,
  HamLine,
 } from '../Styles/HeaderStyles.js';
 
class Header extends React.Component {
  render() {
    return(
      <HeaderWrap>
        <Logo></Logo>
        <HamNav>
          <HamLine></HamLine>
          <HamLine></HamLine>
          <HamLine></HamLine>
        </HamNav>
      </HeaderWrap>
    );
  }
}

export default Header;