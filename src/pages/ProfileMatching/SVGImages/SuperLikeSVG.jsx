import React from 'react'
import { useSelector } from 'react-redux'
import style from '../../../css_modules/profileMatching.module.css'

const SuperLikeSVG = () => {

    const { superLikeAnimation } = useSelector(state => state.profile.animations);

    return (
        <div className={`${style.superLike} col-lg-7 col-11`}>
            <div className={`${superLikeAnimation} pb-3`}>{'🎔'}</div>
        </div>
    )
}

export default SuperLikeSVG