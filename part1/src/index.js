import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
    const [ counter, setCounter ] = useState(0);

    const handleSum = () => {
        setCounter(counter + 1);
    }

    const handleSbstrc = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0)
    }
    const setToValue = (value) => {
        return () => {
            setCounter(value)
        }
    }

    return(
        <>
            <h1>Greetings {counter}</h1>
            <button onClick={setToValue(counter + 1)}>+</button>
            <button onClick={setToValue(counter - 1)}>-</button>
            <button onClick={setToValue(0)}>RESET</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
