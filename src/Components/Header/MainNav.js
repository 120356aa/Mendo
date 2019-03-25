import React from 'react';

import {
  Nav,
  NavA,
} from '../../Styles/Header/MainNaveStyles.js';

const MainNav = () => {
  return (
    <Nav>
      <NavA to="/">Home</NavA>
      <NavA to="/">About</NavA>
      <NavA to="/">Community</NavA>
      <NavA to="/">Contact</NavA>
    </Nav>
  );
}

export default MainNav;