import React from 'react'
import InfoBox from './InfoBox'
import SeekingBox from './SeekingBox'
import SocialsBox from './SocialsBox'
import style from '../../css_modules/aboutInfo.module.css'

const AboutInfo = () => {
  return (
    <div className={`${style.aboutHeaderContainer} text-white offset-lg-2 col-lg-8 col-12`}>
        <h1 className={`${style.aboutText} pt-3`}>About</h1>
        <p className={style.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error commodi quis! Eum soluta saepe ex, mollitia laborum illum recusandae debitis nisi odit tempore ducimus voluptate, eius, aspernatur ab dolores?</p>
        <h1 className={style.aboutText}>Info</h1>
        <InfoBox />
        <h1 className={style.aboutText}>Seeking</h1>
        <SeekingBox />
        <h1 className={style.aboutText}>Socials</h1>
        <SocialsBox />
    </div>
  )
}

export default AboutInfo