import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post'

class App extends Component {
    componentDidMount() {
        // 컴포넌트가 처음 마운트 될 때 현재 number 를 postId 로 사용하여 포스트 내용을 불러옵니다.
        const { number } = this.props;
        this.getPost(number);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.number !== nextProps.number) {
            this.getPost(nextProps.number)
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(postId);
            console.log('요청이 완료 된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        return (
            <div>
                <p>{number}</p>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                { loading && <h2>loading...</h2>}
                { error 
                    ? <h1>Error!</h1>
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                )}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);