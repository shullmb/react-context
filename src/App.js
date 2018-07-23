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

  changeColor = () => {
    var index = colors.indexOf(this.state.color)
    index++
    index = index >= colors.length ? 0 : index
    this.setState({
      color: colors[index]
    })
  }

  render() {
    return (
      <RootContext.Provider value={this.state}>
        <div className="mainapp">
          <ControlPanel />
          <ColorShower />
        </div>
      </RootContext.Provider>
    );
  }
}

export default App;
