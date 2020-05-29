import React from 'react';
import './Calculator.css'

const Calculator = props => {
    return (
    <div className="container">
        <div id="calculadora">
            <div id="pantalla">{props.display}</div>
            <div className="grid-container">
                <button className="operator">AC</button>
                <button className="operator">±</button>
                <button className="operator">%</button>
                <button className="operator right">÷</button>
                <button className="number" onClick={props.click}>7</button>
                <button className="number" onClick={props.click}>8</button>
                <button className="number" onClick={props.click}>9</button>
                <button className="operator right">X</button>
                <button className="number" onClick={props.click}>4</button>
                <button className="number" onClick={props.click}>5</button>
                <button className="number" onClick={props.click}>6</button>
                <button className="operator right">-</button>
                <button className="number" onClick={props.click}>1</button>
                <button className="number" onClick={props.click}>2</button>
                <button className="number" onClick={props.click}>3</button>
                <button className="operator right">+</button>
                <button className="number" id="numero0" onClick={props.click}>0</button>
                <button className="number">.</button>
                <button className="operator right">=</button>
            </div>
        </div>
    </div>
    );
}

export default Calculator;