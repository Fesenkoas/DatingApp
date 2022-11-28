import React from 'react'
import style from '../../css_modules/aboutInfo.module.css'
import HeightSVG from './SVGImages/HeightSVG'
import PhotoHobbySVG from './SVGImages/PhotoHobbySVG'
import MusicSVG from './SVGImages/MusicSVG'
import SkincareSVG from './SVGImages/SkincareSVG'
import GymSVG from './SVGImages/GymSVG'
import UniversitySVG from './SVGImages/UniversitySVG'
import ChristianSVG from './SVGImages/ChristianSVG'
import ArtSVG from './SVGImages/ArtSVG'
import GraduateSVG from './SVGImages/GraduateSVG'

const InfoBox = () => {
  return (
    <div className={style.aboutContainer}>
      
      <div className={style.aboutItem}>
        <PhotoHobbySVG />
        <p className={style.aboutIconText}>Photography</p>
      </div>
    
      <div className={style.aboutItem}>
        <HeightSVG />
        <p className={style.aboutIconText}>5`6(168 cm)</p>
      </div>

      <div className={style.aboutItem}>
        <MusicSVG />
        <p className={style.aboutIconText}>Music</p>
      </div>

      <div className={style.aboutItem}>
        <SkincareSVG />
        <p className={style.aboutIconText}>Skincare</p>
      </div>

      <div className={style.aboutItem}>
        <GymSVG />
        <p className={style.aboutIconText}>Gym</p>
      </div>

      <div className={style.aboutItem}>
        <UniversitySVG />
        <p className={style.aboutIconText}>at New York University</p>
      </div>

      <div className={style.aboutItem}>
        <ChristianSVG />
        <p className={style.aboutIconText}>Christian</p>
      </div>

      <div className={style.aboutItem}>
        <GraduateSVG />
        <p className={style.aboutIconText}>Graduated from Uni. of New-York</p>
      </div>

      <div className={style.aboutItem}>
        <ArtSVG />
        <p className={style.aboutIconText}>Art</p>
      </div>
    
    </div>
  )
}

export default InfoBox