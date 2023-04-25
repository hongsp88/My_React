import React, { Component } from 'react';
import MyLeftPane from './components/MyLeftPane';
import MyRightPane from './components/MyRightPane';
import { MySampleProvider } from './contexts/MySample';
import { MyAnotherProvider } from './contexts/MyAnother';
import MyCounter from './components/MyCounter';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

class App extends Component {
  render() {
    return (
      <AppProvider contexts={[MySampleProvider, MyAnotherProvider]}>
        <div className="panes">
          <MyLeftPane />
          <MyRightPane />
        </div>
        <MyCounter />
      </AppProvider>
    );
  }
}

export default App;
