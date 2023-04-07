import React, { Component } from 'react';

class MyErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info});
    };

    render() {
        if(this.state.error) return <div>Error Occur!</div>;
        return this.props.children;
    }
}

export default MyErrorBoundary;
