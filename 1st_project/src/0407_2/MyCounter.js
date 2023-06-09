import React, { useState } from 'react';

const MyCounter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                Current Count is <b>{value}</b>.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default MyCounter;
