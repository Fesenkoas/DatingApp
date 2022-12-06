import React from 'react'
import LikeDislike from './LikeDislike';
import Profile from './Profile';
import AboutInfo from './AboutInfo';

const Matcher = () => {
    return (
        <div>
            <Profile />
            <LikeDislike />
            <AboutInfo />
        </div>
    )
}

export default Matcher