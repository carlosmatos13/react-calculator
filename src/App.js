import React, { useState } from 'react';
import Calculator from './Calculator/Calculator';
import './App.css';

const App = () => {
  // Set initial states for the values and operator
  const [initialValue, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [hasOperator, setHasOperator] = useState(false);
  const [operator, setOperator] = useState(null);

  // Formats Current value
  let formattedValue = parseFloat(initialValue).toLocaleString('en-US', {
    useGrouping: true,
    maximumFractionDigits: 5
  })

  //Object with functions to operate 
  const calculate = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (nextValue) => nextValue
  }

  // Display current value on screen
  const displayValueHandler = (digit) => {
    if (hasOperator) {
      setValue(digit)
      setHasOperator(false)
    } else {
      setValue(
        (initialValue === "0") ? digit : initialValue + digit
      )
    }
  }
  // Clears display and reset states
  const clearDisplayHandler = () => {
    setValue("0");
    setPrevValue(null);
    setHasOperator(false);
    setOperator(null);
  }

  // This function handles decimal values 
  const addDotHandler = () => {
    if (!initialValue.includes('.')) {
      setValue(initialValue + '.')
      setHasOperator(false)
    }
  }
  // Calculate Percentage of Current Value
  const percentageHandler = () => {
    setValue(
      String(initialValue / 100)
    )
  }

  // Toggle sign of current value
  const toggleSignHandler = () => {
    if (initialValue !== '0') {
      setValue((initialValue.charAt(0) === '-')
        ? initialValue.substr(1)
        : '-' + initialValue
      )
    }
  }

  // This function takes current operator and previous value ands sets current value with result
  const operatorHandler = (nextOperator) => {
    const nextValue = parseFloat(initialValue)

    if (prevValue == null) {
      setPrevValue(nextValue)
    } else if (operator) {
      const result = calculate[operator](prevValue, nextValue);
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
        display={formattedValue} />
    </div>
  );
}

export default App;
