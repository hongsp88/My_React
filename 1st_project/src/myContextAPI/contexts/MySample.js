import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: MySampleConsumer } = Context;

class MySampleProvider extends Component {

    state = {
        value: 'Default Value'
    }

    actions = {
        setValue: (value) => {
            this.setState({value});
        }
    }
    
    render() {
        const { state, actions } = this;
        // Provider 내에서 사용할 값은, "value" 라고 부릅니다.
        // 현재 컴포넌트의 state 와 actions 객체를 넣은 객체를 만들어서,
        // Provider 의 value 값으로 사용하겠습니다.
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

// :: HoC 를 사용
function MyUseSample(WrappedComponent) {
    return function MyUseSample(props) {
        return (
            <MySampleConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent
                            value={state.value}
                            setValue={actions.setValue}
                        />
                    )
                }
            </MySampleConsumer>
        )
    }
}

export {
    MySampleProvider,
    MySampleConsumer,
    MyUseSample
};
