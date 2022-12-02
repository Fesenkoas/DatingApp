import React from 'react'
import style from '../../css_modules/aboutInfo.module.css'
import FriendshipSVG from './SVGImages/FriendshipSVG'
import LoveSVG from './SVGImages/LoveSVG'

const SeekingBox = () => {
  return (
      <div className={style.aboutContainer}>

        <div className={style.aboutItem}>
          <LoveSVG />
          <p className={style.aboutIconText}>Love</p>
        </div>

        <div className={style.aboutItem}>
          <FriendshipSVG />
          <p className={style.aboutIconText}>Friendship</p>
        </div>

      </div>
  )
}

export default SeekingBox