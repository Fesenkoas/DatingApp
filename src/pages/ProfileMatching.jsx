import React from 'react'
import { List } from 'react-bootstrap-icons';
import { GearFill } from 'react-bootstrap-icons';
import style from '../css_modules/profileMatching.module.css';

export const ProfileMatching = () => {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-sm-2 offset-lg-2 col-lg-2'>
                    <List color="white" size={80} />
                </div>
                <div className={`${style.logo} col-sm-8 col-lg-4 text-center pt-3 h1 text-white`}>
                    CYBERLINK
                </div>
                <div className='col-sm-2 col-lg-2 text-end'>
                    <GearFill color="white" size={75} className='h1 pt-3' />
                </div>
            </div>

            <div className='row mt-5'>
                <div className={`${style.avatar} col-sm-12 offset-lg-2 col-lg-8 container`} alt="womanPhoto">
                    <div className={`${style.verified} text-white h2 offset-lg-10 offset-sm-9 mt-4 p-2`}>Verified</div>
                    <div className={`${style.avatarLabel} offset-1 col-sm-10 container`}>
                        <h1 className={`${style.labelText} ms-4 mt-4 text-white col-sm-12`}>Name 34</h1>
                        <h3 className={`${style.labelText} ms-4 mt-3 text-white col-sm-12`}>Location</h3>
                        <div className='row mt-1'>
                            <h4 className={`${style.labelText} col-sm-5 ms-4 text-white`}>Sexuality</h4>
                            <h4 className={`${style.labelText} col-sm-6 text-end text-white`}>3 miles away</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}