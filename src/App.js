import React, { useState } from 'react';
import Calculator from './Calculator/Calculator';
import './App.css';

const App = props => {
  const [calcState, setCalcState] = useState({
    displayValue: "0",
    operator: null,
  });
  const displayValueHandler = (event) => {
    const { displayValue } = calcState;
    const digit = String(event.target.textContent);
    setCalcState({
      displayValue: (displayValue === "0") ? digit : displayValue + digit,
      operator: null,
    })
  }
  const clearDisplayHandler = () => {
    const { displayValue } = calcState;
    setCalcState({
      displayValue: "0",
      operator: null,
    });
  }
  const addDotHandler = () => {
    const { displayValue } = calcState;
    if (!displayValue.includes('.')) {
      setCalcState({
        displayValue: displayValue + '.',
        operator: null,
      })
    }
  }
  const percentageHandler = () => {
    const { displayValue } = calcState;
    setCalcState({
        displayValue: String( displayValue / 100 ),
        operator: null,
    })
  }
  const toggleSignHandler = () => {
    const { displayValue } = calcState;
    setCalcState({
      displayValue: (displayValue.charAt(0) === '-') ? displayValue.substr(1) : '-' + displayValue,
      operator: null,
    })
  }
  // const operatorHandler = (operator) {

  // }
  return (
    <div className="App">
      <Calculator
        displayValue={displayValueHandler}
        clearDisplay={clearDisplayHandler}
        addDot={addDotHandler}
        percentage={percentageHandler}
        toggleSign={toggleSignHandler}
        display={calcState.displayValue} />
    </div>
  );
}

export default App;
