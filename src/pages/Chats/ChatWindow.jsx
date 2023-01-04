import React from 'react'
import ChatPhoto from '../ProfileMatching/SVGImages/ChatPhoto'
import style from '../../css_modules/chats.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ChatWindow = ({ name }) => {

    const navigate = useNavigate();
    const { userChats } = useSelector(state => state.chats);

    const handleChatClick = () => {
        const nameIndex = userChats.findIndex(userChat => userChat.name === name);
        navigate(`${nameIndex}`);
    }

    return (
        <div onClick={handleChatClick} className={`${style.chatBox} col-12`}>
            <ChatPhoto size={''} />
            <h1 className={`${style.chatBoxItem} text-dark`}>{name}</h1>
        </div>
    )
}

export default ChatWindow