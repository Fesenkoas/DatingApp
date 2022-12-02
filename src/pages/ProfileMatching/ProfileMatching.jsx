import React from 'react'
import { Route, Routes } from 'react-router-dom';
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
                <Route path='matched' element={<MatchedScreen />} />
            </Routes>
            <Footer />
        </div>
    )
}