import React from 'react';
import { Link } from 'react-router-dom';

import Social from './Social.js';
import Nav from './Nav.js';
import MainNav from './MainNav.js';

import { 
  HeaderWrap,
  HeaderInner,
  Logo,
  HamNav,
  HamLine,
 } from '../../Styles/Header/HeaderStyles.js';
 
class Header extends React.Component {
  state = {
    mobileMenu: false
  }

  handleMenuToggle = () => {
    let closed = !this.state.mobileMenu;
    if (closed) this.setState({ mobileMenu: true })
    else this.setState({ mobileMenu: false });
  };

  render() {
    return(
      <HeaderWrap>
        <HeaderInner>
          <Logo/>
          <Social/>
          <MainNav/>
          <HamNav onClick={this.handleMenuToggle}>
            <HamLine></HamLine>
            <HamLine></HamLine>
            <HamLine></HamLine>
          </HamNav>
          {this.state.mobileMenu ? <Nav/> :  null }
        </HeaderInner>
      </HeaderWrap>
    );
  }
}

export default Header;