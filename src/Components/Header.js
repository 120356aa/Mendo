import React from 'react';
import { Link } from 'react-router-dom';

import { 
  HeaderWrap,
  Logo,
  SocialBox,
  Social,
  Twitch,
  Youtube,
  Twitter,
  HamNav,
  HamLine,
  MobileMenu,
  NavTriangle,
  StyledLink,
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
        <SocialBox>
          <Social>
            <Twitch />
            <Youtube />
            <Twitter />
          </Social>
        </SocialBox>

        <HamNav onClick={this.handleMenuToggle}>
          <HamLine></HamLine>
          <HamLine></HamLine>
          <HamLine></HamLine>
        </HamNav>
        {this.state.mobileMenu ? (
          <MobileMenu>
            <NavTriangle/>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/">About</StyledLink>
            <StyledLink to="/">Community</StyledLink>
            <StyledLink to="/">Contact</StyledLink>
          </MobileMenu>
        ) : ( null )}
      </HeaderWrap>
    );
  }
}

export default Header;