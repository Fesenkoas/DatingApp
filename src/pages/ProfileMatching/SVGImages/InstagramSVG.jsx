import React from 'react'
import style from '../../../css_modules/aboutInfo.module.css'

const InstagramSVG = () => {
    return (
        <svg className={style.aboutSocialIcon} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#725AC1" />
            <g clipPath="url(#clip0_41_7456)">
                <path d="M37 20.5H26C22.9624 20.5 20.5 22.9624 20.5 26V37C20.5 40.0376 22.9624 42.5 26 42.5H37C40.0376 42.5 42.5 40.0376 42.5 37V26C42.5 22.9624 40.0376 20.5 37 20.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.5 35.625C33.7782 35.625 35.625 33.7782 35.625 31.5C35.625 29.2218 33.7782 27.375 31.5 27.375C29.2218 27.375 27.375 29.2218 27.375 31.5C27.375 33.7782 29.2218 35.625 31.5 35.625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M37.6875 25.3125V25.3135" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_41_7456">
                    <rect width="33" height="33" fill="white" transform="translate(15 15)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default InstagramSVG