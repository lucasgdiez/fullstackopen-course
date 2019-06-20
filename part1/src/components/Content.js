import React from 'react';
import Part from './Part';

const Content = ({textContent}) => {
    console.log(textContent);
            
    return(
         <div>
            <Part content={textContent[0].part1} exercises={textContent[0].exercises1}/>
            <Part content={textContent[1].part2} exercises={textContent[1].exercises2}/>
            <Part content={textContent[2].part3} exercises={textContent[2].exercises3}/>
        </div>
    )
} 

export default Content;