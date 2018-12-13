import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import RouterDiv from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterDiv />
      </div>
    );
  }
}

export default App;
