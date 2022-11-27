import React from 'react'
import Dislike from './SVGImages/DislikeSvg'
import Like from './SVGImages/LikeSvg'
import style from '../../css_modules/profileMatching.module.css'

const LikeDislike = () => {
  return (
    <div className={`${style.likeDislike} row mt-2 mb-5`}>
        <Like />
        <Dislike />
    </div>
  )
}

export default LikeDislike