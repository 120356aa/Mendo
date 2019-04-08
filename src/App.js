import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Banner from './Components/Banner/Banner.js';
import About from './Components/About/About.js';
import Recent from './Components/Recent/Recent.js';
import Sponsor from './Components/Sponsor/Sponsor.js';

import 'reset-css';
import { GlobalStyles } from './Styles/GlobalStyles.js';
import { Wrap } from './Styles/GlobalStyles.js';

class App extends Component {
  render() {
    return (
      <Wrap>
        <GlobalStyles/>
        <Header/>
        <Route exact path="/" component={Banner}/>
        {/* <Route exact path="/" component={About} /> */}
        <Route exact path="/" component={Recent}/>
        {/* <Route path="/" component={Sponsor}/> */}
      </Wrap>
    );
  }
}

export default App;
