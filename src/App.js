import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header.js';
import Banner from './Components/Banner.js';

import 'reset-css';
import { GlobalStyles } from './Styles/GlobalStyles.js';
import { Wrap } from './Styles/GlobalStyles.js';

class App extends Component {
  render() {
    return (
      <Wrap>
        <GlobalStyles/>
        <Header/>
        <Route path="/" component={Banner}/>

      </Wrap>
    );
  }
}

export default App;
