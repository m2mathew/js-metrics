import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './content';
import ButtonContainer from './buttons';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>JavaScript Metrics</h2>
        </div>
        <p className="App-intro">
          Built using the <a href="https://facebook.github.io/react/">ReactJS library</a>
        </p>
        <Content />
        <ButtonContainer />
      </div>
    );
  }
}


export default App;
