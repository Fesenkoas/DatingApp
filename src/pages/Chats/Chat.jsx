import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatBody from './ChatBody'
import ChatBottom from './ChatBottom'
import ChatHeader from './ChatHeader'

const Chat = () => {

    const { userIndex } = useParams();
    const { name } = useSelector(state => state.chats.userChats[userIndex]); 

    return (
        <div>
            <ChatHeader name={name} />
            <ChatBody index={userIndex} />
            <ChatBottom />
        </div>
    )
}

export default Chat