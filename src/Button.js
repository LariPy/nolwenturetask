import React from 'react';
import Read from './Read'

// On click makes HTTP POST request
// gets data, parses data
// (or sends data to be parsed in another component)
// sends data to table
const Button = () => {
    return(
        <div id='button'>
            <Read />
        </div>
    )
}

export default Button;