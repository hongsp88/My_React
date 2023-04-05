import React, { Component } from 'react';

class MyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
    }
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>number : { number }</h1>
                <button onClick={() => {
                    this.setState({number : number + 1}, () => {
                        console.log("state Called")
                    });
                    this.setState(prevState => {
                        return {
                            number : prevState.number + 1
                        };
                    });
                }}
                >+1</button>
            </div>
        )
    }
}

export default MyCounter;
