import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../../../css_modules/profileMatching.module.css'
import { superLikeClicked, superLikeDisapear } from '../../../redux/profileSlice';

const Like = () => {

    const dispatch = useDispatch();
    const { likeButtonAnimation } = useSelector(state => state.profile.animations);

    const handleLikeClick = () => {
        dispatch(superLikeClicked("LIKE"));
        setTimeout(() => {
            dispatch(superLikeDisapear("LIKE"))
        }, 1800);
    }

    return (
        <div onClick={handleLikeClick} className='col-2 offset-lg-2'>
            <svg className={`${style.likeIcon} ${likeButtonAnimation}`} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35.5" r="34.5" fill="#725AC1" stroke="white" strokeWidth="2" />
                <path d="M36 19.0938C27.198 19.0938 20.0625 26.4391 20.0625 35.5C20.0625 44.5609 27.198 51.9062 36 51.9062C44.802 51.9062 51.9375 44.5609 51.9375 35.5C51.9375 26.4391 44.802 19.0938 36 19.0938ZM45.7669 45.5542C43.3451 48.0398 40.1111 49.5082 36.695 49.6732C33.2789 49.8383 29.9255 48.6882 27.2881 46.4471C24.6508 44.206 22.9184 41.0344 22.4286 37.5503C21.9388 34.0661 22.7267 30.5191 24.6386 27.6002C26.5506 24.6814 29.4497 22.5999 32.7711 21.7613C36.0925 20.9227 39.5983 21.3871 42.6052 23.0639C45.6122 24.7408 47.905 27.51 49.0369 30.8321C50.1687 34.1541 50.0586 37.7909 48.7279 41.0339C48.0344 42.7237 47.0288 44.2589 45.7669 45.5542Z" fill="white" />
                <path d="M36 44.25C37.8317 44.25 39.5883 43.501 40.8835 42.1677C42.1786 40.8344 42.9062 39.0261 42.9062 37.1406H29.0938C29.0938 39.0261 29.8214 40.8344 31.1165 42.1677C32.4117 43.501 34.1683 44.25 36 44.25V44.25Z" fill="white" />
                <path d="M32.6636 33.6058L34.024 31.9252L30.1563 28.6074L26.2886 31.9252L27.649 33.6058L30.1563 31.4549L32.6636 33.6058Z" fill="white" />
                <path d="M37.9761 31.9252L39.3365 33.6058L41.8438 31.4549L44.3511 33.6058L45.7115 31.9252L41.8438 28.6074L37.9761 31.9252Z" fill="white" />
            </svg>
        </div>
    )
}

export default Like