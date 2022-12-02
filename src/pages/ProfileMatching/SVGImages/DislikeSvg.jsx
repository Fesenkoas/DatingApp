import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../../../css_modules/profileMatching.module.css'
import { superLikeClicked, superLikeDisapear } from '../../../redux/profileSlice';

const Dislike = () => {

    const dispatch = useDispatch();
    const { dislikeButtonAnimation } = useSelector(state => state.profile.animations);

    const handleLikeClick = () => {
        dispatch(superLikeClicked("DISLIKE"));
        setTimeout(() => {
            dispatch(superLikeDisapear("DISLIKE"))
        }, 1800);
    }

    return (
        <div onClick={handleLikeClick} className='offset-lg-4 offset-md-8 offset-7 col-2 text-end'>
            <svg className={`${style.likeIcon} ${style.dislikeIcon} ${dislikeButtonAnimation}`} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35.5" r="34.5" fill="black" stroke="white" strokeWidth="2" />
                <path d="M36 56C47.0457 56 56 47.0457 56 36C56 24.9543 47.0457 16 36 16C24.9543 16 16 24.9543 16 36C16 47.0457 24.9543 56 36 56Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 30L30 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 30L42 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default Dislike