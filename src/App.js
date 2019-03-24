import React, { Component } from 'react';
import Header from './Components/Header.js';

import 'reset-css';
import { GlobalStyles } from './Styles/GlobalStyles.js';
import { Wrap } from './Styles/GlobalStyles.js';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header/>
      </Wrap>
    );
  }
}

export default App;
