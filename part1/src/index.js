import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


const App = () => {
    const course = 'Half Stack application development';
    // const part1 = 'Fundamentals of React';
    // const exercises1 = 10;
    // const part2 = 'Using props to pass data';
    // const exercises2 = 7;
    // const part3 = 'State of a component';
    // const exercises3 = 14;

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };

    const part3 = {
        name: 'State of a component',
        exercises: 14
    };

    const parts = [part1, part2, part3];
    const exercises = [part1.exercises, part2.exercises, part3.exercises]

    return(
        <>
            <Header course={course}/>
            <Content textContent={parts} />
            <Total exercises={exercises}/>
            <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
