import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
<Router basename="/Mendo">
  <App />
</Router>
, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
