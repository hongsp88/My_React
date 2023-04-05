import React, { Component } from 'react';
import propTypes from 'prop-types';

class MyClassComponent extends Component {
    static defaultProps = {
        myData : 'Default Class'
    }
    static propTypes = {
        myData : propTypes.string.isRequired
    }
    render() {
        const {myData} = this.props;
        return (<h1>Call Class Component : {myData}</h1>)
    }
}

export default MyClassComponent;
