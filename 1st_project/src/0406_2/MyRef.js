import React, { Component } from 'react';

class MyRef extends Component {
    state = {
        password: '',
        clicked: false,
        validdata: false
    }

    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    }
    handleClick = e => {
        this.setState({
            clicked: true,
            validdata: this.state.password === '0000'
        })
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={ref => {this.input = ref}}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked ? this.state.validdata ? 'success' : 'fail' : ''
                    }
                />
                <button onClick={this.handleClick}>
                    Check
                </button>
            </div>
        )
    }
}

export default MyRef;
