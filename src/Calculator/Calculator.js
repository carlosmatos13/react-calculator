import React from 'react';
import './Calculator.css'
import ScaleText from "react-scale-text";

const Calculator = props => {
    return (
    <div className="container">
        <div id="calculator">
            <div id="display">
                <ScaleText>
                    <p>{props.display}</p>
                </ScaleText>
            </div>
            <div className="grid-container">
                <button className="operator" onClick={props.clearDisplay}>AC</button>
                <button className="operator" onClick={props.toggleSign}>±</button>
                <button className="operator" onClick={props.percentage}>%</button>
                <button className="operator right" onClick={props.operator.bind(this, '/')}>÷</button>
                <button className="number" onClick={props.displayValue.bind(this, '7')}>7</button>
                <button className="number" onClick={props.displayValue.bind(this, '8')}>8</button>
                <button className="number" onClick={props.displayValue.bind(this, '9')}>9</button>
                <button className="operator right" onClick={props.operator.bind(this, '*')}>x</button>
                <button className="number" onClick={props.displayValue.bind(this, '4')}>4</button>
                <button className="number" onClick={props.displayValue.bind(this, '5')}>5</button>
                <button className="number" onClick={props.displayValue.bind(this, '6')}>6</button>
                <button className="operator right" onClick={props.operator.bind(this, '-')}>-</button>
                <button className="number" onClick={props.displayValue.bind(this, '1')}>1</button>
                <button className="number" onClick={props.displayValue.bind(this, '2')}>2</button>
                <button className="number" onClick={props.displayValue.bind(this, '3')}>3</button>
                <button className="operator right" onClick={props.operator.bind(this, '+')}>+</button>
                <button className="number" id="numero0" onClick={props.displayValue.bind(this, '0')}>0</button>
                <button className="number" onClick={props.addDot}>.</button>
                <button className="operator right" onClick={props.operator.bind(this, '=')}>=</button>
            </div>
        </div>
    </div>
    );
}

export default Calculator;