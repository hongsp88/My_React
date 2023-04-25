import React, { Component, createContext } from 'react';
import createUseConsumer from '../lib/createUseConsumer';

const Context = createContext();

const { Provider, Consumer: MyAnotherConsumer } = Context;

class MyAnotherProvider extends Component {

    state = {
        number: 1
    }

    actions = {
        increment: () => {
            this.setState(
                ({number}) => ({ number : number + 1})
            );
        }
    }
    
    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

const MyUseAnother = createUseConsumer(MyAnotherConsumer);

export {
    MyAnotherProvider,
    MyAnotherConsumer,
    MyUseAnother
};
