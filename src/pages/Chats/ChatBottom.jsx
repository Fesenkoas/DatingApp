import React, { useState } from 'react'
import PutImgSVG from '../ProfileMatching/SVGImages/PutImgSVG'
import style from '../../css_modules/chats.module.css';
import MicrophoneSVG from '../ProfileMatching/SVGImages/MicrophoneSVG';
import SendSVG from '../ProfileMatching/SVGImages/SendSVG';

const ChatBottom = () => {

    const [currMessage, setCurrMessage] = useState('');
    const handleInputChange = e => setCurrMessage(e.target.value);

    return (
        <div className={style.chatBottomBox}>
            <PutImgSVG />
            <div className={style.chatBottomInputBox}>
                <input value={currMessage} onChange={handleInputChange} className={style.chatBottomInput} type='text' placeholder='Say something...' />
                <MicrophoneSVG />
            </div>
            <SendSVG message={currMessage} />
        </div>
    )
}

export default ChatBottom