import React, { Component } from 'react';

class MyEvent extends Component {
    state = {
        message: '',
        username: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = e => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        })
    }
    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.handleClick();
        }       
    }

    render() {
        return (
            <div>
                <h1>Evnt</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='Enter the UserName'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Enter the Message'
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    OK
                </button>
            </div>
        )
    }
}

export default MyEvent;
