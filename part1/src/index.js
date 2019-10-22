import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
    const [ counter, setCounter ] = useState(0);

    const timeout = setTimeout(() => setCounter(counter + 1), 1000);

    return(
        <>
            <h1>Greetings {counter}</h1>
            <button onClick={() => clearTimeout(timeout)}>Stop Counter</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
