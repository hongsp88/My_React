import React, { useState } from 'react';

function MyEvent2() {
    /*const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };*/

    const [message, setMessage] = useState('');
    const [username, setUserName] = useState('');
    const onChangeMessage = (e) => setMessage(e.target.value);
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onClick = (e) => {
        alert(username + ' : ' + message);
        setMessage('');
        setUserName('');
    }
    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>Evnt2</h1>
            <input
                type='text'
                name='username'
                placeholder='Enter the UserName'
                onChange={onChangeUserName}
            />
            <input
                type='text'
                name='message'
                placeholder='Enter the Message'
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                OK
            </button>
        </div>
    )
}

export default MyEvent2;
