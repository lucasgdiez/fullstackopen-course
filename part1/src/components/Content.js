import React from 'react';
import Part from './Part';

const Content = ({textContent}) => {
    return(
        <div>
            {
                textContent.map((content, index) => {
                    return <Part key={index} content={content.name} exercises={content.exercises} />
                })
            }
        </div>
    )
} 

export default Content;