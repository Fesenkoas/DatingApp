import React from 'react'
import style from '../../css_modules/chats.module.css'
import ChatPhoto from '../ProfileMatching/SVGImages/ChatPhoto'
import ChatMenuSVG from '../ProfileMatching/SVGImages/ChatMenuSVG'
import { useNavigate } from 'react-router-dom'

const ChatHeader = ({name}) => {
    
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/profile/chats');
    }
    
    return (
        <div className={style.chatHeaderBox}>
            <h1 onClick={handleBackClick} className={style.chatHeaderItem}>{`<`}</h1>
            <div className={style.chatHeaderNameBox}>
                <ChatPhoto size={style.chatBoxItem} />
                <h2>{name}</h2>
            </div>
            <ChatMenuSVG />
        </div>
    )
}

export default ChatHeader