import React, { useState } from 'react';
import Calculator from './Calculator/Calculator';
import './App.css';

const App = props => {
  const [ initialValue, setValue ] = useState("0");
  const displayValueHandler = (event) => {
    const digit = String(event.target.textContent);
    setValue(
       (initialValue === "0") ? digit : initialValue + digit
    )
  }
  const clearDisplayHandler = () => {
    setValue("0");
  }
  const addDotHandler = () => {
    if (!initialValue.includes('.')) {
      setValue( initialValue + '.')
    }
  }
  const percentageHandler = () => {
    setValue(
      String(initialValue / 100)
    )
  }
  const toggleSignHandler = () => {
    setValue(
      (initialValue.charAt(0) === '-') ? initialValue.substr(1) : '-' + initialValue
    )
  }
  return (
    <div className="App">
      <Calculator 
        displayValue={displayValueHandler}
        clearDisplay={clearDisplayHandler}
        addDot={addDotHandler}
        percentage={percentageHandler}
        toggleSign={toggleSignHandler}
        display={initialValue}/>
    </div>
  );
}

export default App;
 