import React, { useState } from 'react';

const MyIterator = () => {
    const [names, setNames] = useState([
        {id:1, text:'aa'},
        {id:2, text:'bb'},
        {id:3, text:'cc'},
        {id:4, text:'dd'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextName = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextName);
        setInputText('');
    }
    const deleteItem = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNextId(nextId - 1);
        setNames(nextNames);
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => deleteItem(name.id)}>{name.text}</li>)
    );

    return (
        <>
            <input value={inputText} onChange={onChange} placeholder='Enter'></input>
            <button onClick={onClick}>ADD</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default MyIterator;
