import React from 'react'
import style from '../../../css_modules/aboutInfo.module.css'

const FacebookSVG = () => {
    return (
        <svg className={style.aboutSocialIcon} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#725AC1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M47 31.0967C47 22.2076 39.8357 15 31 15C22.1643 15 15 22.2076 15 31.0967C15 39.1306 20.85 45.7899 28.5 46.9986V35.751H24.4364V31.0967H28.5V27.5504C28.5 23.5169 30.8893 21.287 34.5436 21.287C36.2943 21.287 38.1257 21.6018 38.1257 21.6018V25.5634H36.1071C34.1207 25.5634 33.4993 26.8037 33.4993 28.0785V31.0967H37.9364L37.2279 35.751H33.5V47C41.15 45.792 47 39.1328 47 31.0967Z" fill="white" />
        </svg>

    )
}

export default FacebookSVG