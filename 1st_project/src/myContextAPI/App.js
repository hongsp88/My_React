import React, { Component } from 'react';
import MyLeftPane from './components/MyLeftPane';
import MyRightPane from './components/MyRightPane';
import { MySampleProvider } from './contexts/MySample';

class App extends Component {
  render() {
    return (
      <MySampleProvider>
        <div className="panes">
          <MyLeftPane />
          <MyRightPane />
        </div>
      </MySampleProvider>
    );
  }
}

export default App;
