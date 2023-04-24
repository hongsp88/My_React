import React from 'react';
import { MyUseSample } from '../contexts/MySample';

const MyReceives = ({value}) => {
    return (
        <div>
            Current Setting Value: {value}
        </div>
    )
}

export default MyUseSample(MyReceives);
