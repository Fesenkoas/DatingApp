import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Chat from '../Chats/Chat';
import Chats from '../Chats/Chats';
import Footer from './Footer';
import Header from './Header';
import MatchedScreen from './MatchedScreen';
import Matcher from './Matcher';

export const ProfileMatching = () => {
    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route path='matcher' element={<Matcher />} />
                <Route path='chats' element={<Chats />} />
                <Route path='chats/:userIndex' element={<Chat />} />
            </Routes>
            <Footer />
        </div>
    )
}