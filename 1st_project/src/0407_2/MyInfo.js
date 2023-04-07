import React, { useEffect } from 'react';
import MyUseInput from './MyUseInput';

const MyInfo = () => {
    const [state, onChange] = MyUseInput( {name: '', nickname: ''});
    const {name, nickname} = state;

    useEffect(() => {
        console.log('Rendering is Completed');
        console.log({name, nickname})
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    });

    return (
        <div>
            <input name='name' value={name} onChange={onChange}></input>
            <input name='nickname' value={nickname} onChange={onChange}></input>
            <div>Name : {name}</div>
            <div>NickName : {nickname}</div>
        </div>
    )
}

export default MyInfo;
