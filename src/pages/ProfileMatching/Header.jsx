import React from 'react'
import LogoSVG from './SVGImages/LogoSVG'
import MenuSvg from './SVGImages/MenuSvg'
import SettingSVG from './SVGImages/SettingSVG'

const Header = () => {
  return (
    <div className='row mt-2'>
        <MenuSvg />
        <LogoSVG />
        <SettingSVG />
    </div>
  )
}

export default Header