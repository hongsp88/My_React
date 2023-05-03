import { Component } from 'react';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';

import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
        <SassComponent />
        <StyledComponent />
      </div>
    )
  }
}

export default App;
