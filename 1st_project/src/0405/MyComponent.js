import React from 'react';
import propTypes from 'prop-types';

function MyComponent({myData}) {
    return (<h1>Call Component : {myData}</h1>)
}

MyComponent.defaultProps = {
    myData : "Default Value"
};
MyComponent.propTypes = {
    myData : propTypes.string
};

export default MyComponent;
