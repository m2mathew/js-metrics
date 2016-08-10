// react
import React, { Component } from 'react';
// dependencies
import logo from './images/logo.svg';
import './App.css';
import LayoutBody from './shared/layout/layout-body';
import LayoutContainer from './shared/layout/layout-container';
import Content from './content';
import ButtonContainer from './buttons';


class App extends Component {

  render() {
    return (
      <LayoutBody>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>JavaScript Metrics</h2>
          </div>
          <p className="App-intro">
            Built using the <a href="https://facebook.github.io/react/">ReactJS library</a> and <a href="http://www.material-ui.com">Material-UI</a>
          </p>
            <LayoutContainer>
              <Content />
              <ButtonContainer />
            </LayoutContainer>
        </div>
      </LayoutBody>
    );
  }
}


export default App;
