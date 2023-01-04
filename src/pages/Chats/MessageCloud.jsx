import React from 'react'
import style from '../../css_modules/chats.module.css'

const MessageCloud = ({ message, side }) => {
    return (
        <div className={style.chatBodyMessageBox}>
            <h4 className={`${style.chatBodyMessageBoxText} ${side}`}>{message}</h4>
        </div>
    )
}

export default MessageCloud