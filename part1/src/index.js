import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
    const [ counter, setCounter ] = useState(0);

    setTimeout(() => setCounter(counter + 1), 1000);

    return(
        <>
            <h1>Greetings {counter}</h1>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
