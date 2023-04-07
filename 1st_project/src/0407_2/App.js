import React, { useState } from 'react';
import MyCounter from './MyCounter';
import MyInfo from './MyInfo';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      <MyCounter />
      {visible && <MyInfo />}
    </div>
  );
}

export default App;
