import React from 'react';

import {
  MobileMenu,
  NavTriangle,
  StyledLink,
} from '../../Styles/Header/NavStyles.js';

const Nav = () => {
  return (
    <MobileMenu>
      <NavTriangle/>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Newest Content</StyledLink>
      <StyledLink to="/">Community</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
    </MobileMenu>
  );
};

export default Nav;