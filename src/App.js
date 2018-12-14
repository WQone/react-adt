import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Layouts from './views/Layout';
import mockInit from '../src/api/mock';
mockInit();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layouts />
      </div>
    );
  }
}

export default App;
