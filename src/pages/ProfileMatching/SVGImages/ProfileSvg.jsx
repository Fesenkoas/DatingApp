import React from 'react'
import style from '../../../css_modules/profileMatching.module.css';

const ProfileSvg = () => {
    return (
        <div className='col-4 text-center'>
            <svg className={style.footerIcon} width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6551 18.4999C22.9123 18.4999 26.3634 15.0488 26.3634 10.7916C26.3634 6.53439 22.9123 3.08325 18.6551 3.08325C14.3979 3.08325 10.9468 6.53439 10.9468 10.7916C10.9468 15.0488 14.3979 18.4999 18.6551 18.4999Z" stroke="black" stroke-width="3.46875" />
                <path d="M26.3638 21.5833H26.906C29.2384 21.5833 31.2059 23.3201 31.4953 25.6346L32.0973 30.4508C32.3273 32.2911 30.8923 33.9166 29.0377 33.9166H8.27323C6.41862 33.9166 4.98368 32.2911 5.21372 30.4508L5.81574 25.6346C6.10505 23.3201 8.07254 21.5833 10.405 21.5833H10.9472" stroke="black" stroke-width="3.46875" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

export default ProfileSvg