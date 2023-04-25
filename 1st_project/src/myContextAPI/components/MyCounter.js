import React from 'react';
import { MyUseAnother } from '../contexts/MyAnother';

const MyCounter = ({ number, increment }) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>Add</button>
        </div>
    )
}

export default MyUseAnother(
    ({ state, actions }) => ({
        number: state.number,
        increment: actions.increment
    })
)(MyCounter);
