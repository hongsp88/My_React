import React, { Component } from 'react';
import MyRef from './MyRef';
import MyScrollBox from './MyScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <MyRef />
        <MyScrollBox ref={ref => {this.scrollBox = ref}}/>
        <button onClick={() => this.scrollBox.scrollToTop()}>
           Move Top.
        </button>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
           Move Bottom.
        </button>
      </div>
    );
  }
}

export default App;
