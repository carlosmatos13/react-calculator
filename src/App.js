import React, { useState } from 'react';
import Calculator from './Calculator/Calculator';
import './App.css';

const App = props => {
  const [ calcState, setCalc ] = useState({
      initialValue: 0
  });
  // const operate = () => {
  //   console.log("Funciona")
  // }
  const displayValueHandler = (event) => {
    const digit = event.target.textContent;
    setCalc({
        initialValue : (calcState.initialValue === 0) ? digit : calcState.initialValue + digit
    })
  }
  return (
    <div className="App">
      <Calculator 
        click={displayValueHandler}
        display={calcState.initialValue}/>
    </div>
  );
}

export default App;
