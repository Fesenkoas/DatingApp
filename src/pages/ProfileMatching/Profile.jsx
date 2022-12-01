import React from 'react'
import { useSelector } from 'react-redux';
import style from '../../css_modules/profileMatching.module.css';
import ArrowUpSVG from './SVGImages/ArrowUpSVG';
import SuperLikeSVG from './SVGImages/SuperLikeSVG';

const Profile = () => {

    const { avatarAnimation, verifyAnimation, avatarLabelAnimation } = useSelector(state => state.profile.animations);

    return (
        <div className='row mt-2'>
            <div className={`${style.avatar} ${avatarAnimation} col-12 col-sm-12 offset-lg-2 col-lg-8 container`}>
                <div className={`${style.verified} ${verifyAnimation} h2 offset-8 offset-lg-9 offset-sm-9 p-2`}>Verified</div>
                <SuperLikeSVG />
                <div className={`${style.avatarLabel} ${avatarLabelAnimation} col-12 col-sm-10 container`}>
                    <h2 className={`${style.labelText} ms-2 pt-3 col-12 col-sm-12`}>Name 34</h2>
                    <h4 className={`${style.labelText} ms-2 col-12 col-sm-12`}>Location</h4>
                    <div className='row mt-1'>
                        <h5 className={`${style.labelText} ${style.sexuality} col-sm-5 ms-2`}>Sexuality</h5>
                        <h5 className={`${style.labelText} ${style.milesAway} col-sm-6 text-end`}>3 miles away</h5>
                    </div>
                </div>
                <ArrowUpSVG />
            </div>
        </div>
    )
}

export default Profile