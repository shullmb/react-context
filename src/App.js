import React, { Component } from 'react';
import { RootContext, colors } from './RootContext';
import { ControlPanel } from './ControlPanel';
import { ColorShower } from './ColorShower';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: color[0],
      changeColor: this.changeColor
    }
    this.changeColor = this.changeColor.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
