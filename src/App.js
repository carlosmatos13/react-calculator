import React, { useState } from 'react';
import Calculator from './Calculator/Calculator';
import './App.css';

const App = props => {
  const [initialValue, setValue] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [hasOperator, setHasOperator] = useState(false);
  const [operator, setOperator] = useState(null);

  const displayValueHandler = (event) => {
    const digit = String(event.target.textContent);
    if (hasOperator) {
      setValue(digit)
      setHasOperator(false)
    } else {
      setValue(
        (initialValue === "0") ? digit : initialValue + digit
      )
    }
  }


  const clearDisplayHandler = () => {
    setValue("0");
    setPrevValue(null);
    setHasOperator(false);
    setOperator(null);
  }


  const addDotHandler = () => {
    if (hasOperator) {

    }
    if (!initialValue.includes('.')) {
      setValue(initialValue + '.')
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


  const calculate = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue
  }


  const operatorHandler = (event) => {
    const nextOperator = event.target.textContent;
    const nextValue = parseFloat(initialValue)


    if (prevValue == null) {
      setPrevValue(nextValue)
    } else if (setHasOperator) {
      const currentValue = parseFloat(prevValue) || 0;
      const result = calculate[operator](prevValue, currentValue);
      setPrevValue(result)
      setValue(String(result))
    }


    setHasOperator(true);
    setOperator(nextOperator);
  }


  return (
    <div className="App">
      <Calculator
        displayValue={displayValueHandler}
        clearDisplay={clearDisplayHandler}
        addDot={addDotHandler}
        percentage={percentageHandler}
        toggleSign={toggleSignHandler}
        operator={operatorHandler}
        display={initialValue} />
    </div>
  );
}

export default App;
