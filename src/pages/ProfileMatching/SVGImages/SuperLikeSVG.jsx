import React from 'react'
import { useSelector } from 'react-redux'
import style from '../../../css_modules/profileMatching.module.css'

const SuperLikeSVG = () => {

    const { superLikeAnimation } = useSelector(state => state.profile.animations);

    return (
        <div className={`${style.superLike} ${superLikeAnimation} row text-center`}>
            <div className={`pb-3 col-12`}>{'🎔'}</div>
        </div>
    )
}

export default SuperLikeSVG