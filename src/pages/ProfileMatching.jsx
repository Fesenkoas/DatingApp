import React from 'react'
import { List } from 'react-bootstrap-icons';
import { GearFill } from 'react-bootstrap-icons';
import style from '../css_modules/profileMatching.module.css';

export const ProfileMatching = () => {
    return (
        <div className='container'>

            <div className='row mt-3'>
                <div className={`${style.icon} col-2 offset-lg-2 col-lg-2`}>
                    <List color="white" size='60%' />
                </div>
                <div className={`${style.logo} col-8 col-lg-4 text-center h1 text-white`}>
                    CYBERLINK
                </div>
                <div className={`${style.icon} col-2 col-sm-2 col-md-2 col-lg-2 text-end`}>
                    <GearFill color="white" size='60%'/>
                </div>
            </div>

            <div className='row mt-2'>
                <div className={`${style.avatar} col-12 col-sm-12 offset-lg-2 col-lg-8 container`} alt="womanPhoto">
                    <div className={`${style.verified} text-white h2 offset-8 offset-lg-9 offset-sm-9 p-2`}>Verified</div>
                    <div className={`${style.avatarLabel} col-12 col-sm-10 container`}>
                        <h1 className={`${style.labelText} ms-2 pt-3 text-white col-12 col-sm-12`}>Name 34</h1>
                        <h4 className={`${style.labelText} ms-2 text-white col-12 col-sm-12`}>Location</h4>
                        <div className='row mt-1'>
                            <h5 className={`${style.labelText} ${style.sexuality} col-sm-5 ms-2 text-white`}>Sexuality</h5>
                            <h5 className={`${style.labelText} ${style.milesAway} col-sm-6 text-end text-white`}>3 miles away</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}