import React from 'react'
import style from '../../css_modules/profileMatching.module.css';
import ChatSvg from './SVGImages/ChatSvg';
import HandSvg from './SVGImages/HandSvg';
import ProfileSvg from './SVGImages/ProfileSvg';

const Footer = () => {
    return (
        <div className={`${style.footer} offset-lg-2 col-lg-8 col-12 mt-2 mb-2 container`}>
            <div className='row'>
                <HandSvg />
                <ChatSvg />
                <ProfileSvg />
            </div>
        </div>
    )
}

export default Footer