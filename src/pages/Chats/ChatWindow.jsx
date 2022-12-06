import React from 'react'
import ChatPhoto from '../ProfileMatching/SVGImages/ChatPhoto'
import style from '../../css_modules/chats.module.css'

const ChatWindow = ({ name }) => {
    return (
        <div className={`${style.chatBox} col-12`}>
            <ChatPhoto />
            <h1 className={`${style.chatBoxItem} text-dark`}>{name}</h1>
        </div>
    )
}

export default ChatWindow