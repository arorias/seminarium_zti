import React, { Component } from 'react';
import DisplayName from './components/DisplayName'
import ChangeName from './components/ChangeName'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayName />
        <hr/>
        <ChangeName />
      </div>
    );
  }
}

export default App;
