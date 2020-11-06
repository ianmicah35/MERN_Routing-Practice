import React from 'react';

const NumberComp = (props) => {
    return (
        <div>
            {
                !isNaN(props.input) ? <h3>The number is: {props.input}</h3> : <h3>The word is: {props.input}</h3>
            }
        </div>
    );
}

export default NumberComp;