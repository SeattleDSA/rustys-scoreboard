import React, { Component } from 'react';
import './App.css';

import StageList from './components/stage_list';

import MotionStage from './components/motion_stage';

function currentStage() {
  return (<MotionStage/>);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <StageList/>
        {currentStage()}
      </div>
    );
  }
}

export default App;
