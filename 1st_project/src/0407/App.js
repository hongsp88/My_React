import React, { Component } from 'react';
import MyLifeCycle from './MyLifeCycle';
import MyErrorBoundary from './MyErrorBoundary';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <MyErrorBoundary>
          <MyLifeCycle color={this.state.color}/>
        </MyErrorBoundary>
      </div>
    );
  }
}

export default App;
