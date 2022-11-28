import React from 'react'
import AboutInfo from './AboutInfo';
import Footer from './Footer';
import Header from './Header';
import LikeDislike from './LikeDislike';
import Profile from './Profile';

export const ProfileMatching = () => {
    return (
        <div className='container'>
            <Header />
            <Profile />
            <LikeDislike />
            <AboutInfo />
            <Footer />
        </div>
    )
}