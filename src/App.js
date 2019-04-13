import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Banner from './Components/Banner/Banner.js';
import About from './Components/About/About.js';
import RecentHeading from './Components/Headings/RecentHeading.js';
import Recent from './Components/Recent/Recent.js';
import Sponsor from './Components/Sponsor/Sponsor.js';
import Footer from './Components/Footer/Footer.js';

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
        <Route exact path="/" component={RecentHeading} />
        <Route exact path="/" component={Recent}/>
        <Route path="/" component={Footer} />
      </Wrap>
    );
  }
}

export default App;
