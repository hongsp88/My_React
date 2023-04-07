import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function MyUseInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e) => {
        dispatch(e.target);
    };
    return [state, onChange];
}
