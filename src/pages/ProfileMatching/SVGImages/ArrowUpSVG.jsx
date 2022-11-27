import React from 'react'
import style from '../../../css_modules/profileMatching.module.css';

const ArrowUpSVG = () => {
    return (
        <div className='text-center'>
            <svg className={style.arrowUp} width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3553 7.28653L28.2396 19.289L31.2971 16.1943L16 0.711414L0.702877 16.1943L3.76039 19.289L15.6447 7.28653L16 6.9277L16.3553 7.28653Z" fill="black" stroke="white" />
            </svg>
        </div>
    )
}

export default ArrowUpSVG