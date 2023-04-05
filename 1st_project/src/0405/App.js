import React from 'react';
import MyComponent from '../MyComponent';
import MyClassComponent from '../MyClassComponent';

function App() {
  const myAddr = "1st_project.com";
  const myStyle = {
    backgroundColor : "black",
    color : "aqua",
    fontSize : "24px",
    fontWeight : "bold",
    padding : "4px"
  }
  return (
    <div style={myStyle}>
      <h1>Hellow</h1>

      {myAddr == "1st_project.com2" ? (
          <h1> 일치 </h1>
        ) : (
          <h2> 불일치 </h2>
      )}

      <MyComponent />
      <MyClassComponent myData='Test'/>
    </div>
  );
}

export default App;
