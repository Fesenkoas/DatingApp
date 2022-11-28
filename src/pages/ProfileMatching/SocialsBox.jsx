import React from 'react'
import style from '../../css_modules/aboutInfo.module.css'
import InstagramSVG from './SVGImages/InstagramSVG'
import TwitterSVG from './SVGImages/TwitterSVG'
import FacebookSVG from './SVGImages/FacebookSVG'
import SnapchatSVG from './SVGImages/SnapchatSVG'

const SocialsBox = () => {
  return (
    <div className={style.aboutContainer}>
      <InstagramSVG />
      <TwitterSVG />
      <FacebookSVG />
      <SnapchatSVG />
    </div>
  )
}

export default SocialsBox