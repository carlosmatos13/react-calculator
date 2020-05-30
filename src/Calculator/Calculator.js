import React from 'react';
import './Calculator.css'

const Calculator = props => {
    return (
    <div className="container">
        <div id="calculadora">
            <div id="pantalla">{props.display}</div>
            <div className="grid-container">
                <button className="operator" onClick={props.clearDisplay}>AC</button>
                <button className="operator" onClick={props.toggleSign}>±</button>
                <button className="operator" onClick={props.percentage}>%</button>
                <button className="operator right">÷</button>
                <button className="number" onClick={props.displayValue}>7</button>
                <button className="number" onClick={props.displayValue}>8</button>
                <button className="number" onClick={props.displayValue}>9</button>
                <button className="operator right">X</button>
                <button className="number" onClick={props.displayValue}>4</button>
                <button className="number" onClick={props.displayValue}>5</button>
                <button className="number" onClick={props.displayValue}>6</button>
                <button className="operator right">-</button>
                <button className="number" onClick={props.displayValue}>1</button>
                <button className="number" onClick={props.displayValue}>2</button>
                <button className="number" onClick={props.displayValue}>3</button>
                <button className="operator right">+</button>
                <button className="number" id="numero0" onClick={props.displayValue}>0</button>
                <button className="number" onClick={props.addDot}>.</button>
                <button className="operator right">=</button>
            </div>
        </div>
    </div>
    );
}

export default Calculator;