import React, { Component } from 'react';
import Buttons from './Buttons';
import CounterListContainer from '../containers/CounterListContainer';

import { connect } from 'react-redux';
import * as actions from '../modules';

import { getRandomColor } from '../utils';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Buttons 
                    onCreate={this.props.onCreate}
                    onRemove={this.props.onRemove}
                />
                <CounterListContainer />
            </div>
        )
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);