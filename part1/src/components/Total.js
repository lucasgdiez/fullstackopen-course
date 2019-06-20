import React from 'react';


const Total = ({exercises}) => {
    return <p> The total is {exercises.reduce((total, args) => total + args, 0)}</p>
}

export default Total;