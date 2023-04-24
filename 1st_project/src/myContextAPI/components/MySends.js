import React, { Component } from 'react';
import { MyUseSample } from '../contexts/MySample';

class MySends extends Component {

    state = {
        input: ''
    }

    componentDidMount() {
        this.setState({
            input: this.props.value
        })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">설정</button>
            </form>
        )
    }
}

// MyUseSample 사용
export default MyUseSample(MySends);
