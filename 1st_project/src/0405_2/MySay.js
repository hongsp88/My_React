import React, { useState } from 'react';

function MySay() {
    const [message, setMessage] = useState('Init State');
    const [color, setColor] = useState('yellow');
    const onClickEnter = () => setMessage('Hellow');
    const onClickLeave = () => setMessage('Good Bye');

    return (
        <div>
            <h1 style={{color}}>{message}</h1>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h3></h3>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('blue')}>Blue</button>
        </div>
    )
}

export default MySay;
