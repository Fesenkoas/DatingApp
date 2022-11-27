import React from 'react'
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
            <Footer />
        </div>
    )
}