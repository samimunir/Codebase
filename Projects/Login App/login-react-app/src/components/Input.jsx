import React from 'react';

function Input(props) {
    return (
        <input
            type={props.type}
            placeholde={props.placeholder}
        />
    );
}

export default Input;