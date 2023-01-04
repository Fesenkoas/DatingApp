import React from 'react'
import WarningSVG from '../ProfileMatching/SVGImages/WarningSVG';
import MessageCloud from './MessageCloud';
import style from '../../css_modules/chats.module.css';
import { useSelector } from 'react-redux';
import MatchedScreen from '../ProfileMatching/MatchedScreen';

const ChatBody = ({ index }) => {

    const { messages, matched } = useSelector(state => state.chats.userChats[index]);
    const messageClouds = messages.map((message) => <MessageCloud message={message} side={style.right} key={`${message} ${index}`} />);
    const renderElement = matched ? <MatchedScreen /> : messageClouds;

    return (
        <div className={`${style.chatBodyBox} text-white`}>
            <div className={style.chatBodyWarningBox}>
                <p className={style.chatBodyWarningText}>Do not share sensetive information with anyone and report any suspicious activity.</p>
                <WarningSVG />
            </div>

            {renderElement}

        </div>
    )
}

export default ChatBody