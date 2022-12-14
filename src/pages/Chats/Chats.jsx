import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../../css_modules/chats.module.css'
import { getNames } from '../../redux/chatsSlice';
import ChatWindow from './ChatWindow';

const Chats = () => {

    const dispatch = useDispatch();
    const { names } = useSelector(state => state.chats);
    
    useEffect(() => {
        dispatch(getNames());
    }, [dispatch]);

    const { names } = useSelector(state => state.chats);

    return (
        <div>
            <h1 className='text-white'>Chats</h1>
            <div className={style.chatsContainer}>
                {names.map((name, index) => <ChatWindow name={name} index={index} key={`${name} ${index}`} />)}
            </div>
        </div>
    )
}

export default Chats
