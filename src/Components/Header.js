import React from 'react';
import { Link } from 'react-router-dom';

import Social from './Header/Social.js';
import Nav from './Header/Nav.js';

import { 
  HeaderWrap,
  Logo,
  HamNav,
  HamLine,
 } from '../Styles/HeaderStyles.js';
 
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
        <Logo/>
        <Social/>
        <HamNav onClick={this.handleMenuToggle}>
          <HamLine></HamLine>
          <HamLine></HamLine>
          <HamLine></HamLine>
        </HamNav>
        {this.state.mobileMenu ? <Nav/> :  null }
      </HeaderWrap>
    );
  }
}

export default Header;