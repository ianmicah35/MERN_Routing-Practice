import React from 'react';

const ColorWord = (props) => {
    return (
        <div>
            {
                <h3>The word is: {props.text.bgcolor.font}</h3>
            }
        </div>
    );
}

export default ColorWord;

