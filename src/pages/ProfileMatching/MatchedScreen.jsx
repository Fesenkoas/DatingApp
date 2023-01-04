import React from 'react'
import LoveSVG from './SVGImages/LoveSVG'
import FriendshipSVG from './SVGImages/FriendshipSVG'
import styleMatched from '../../css_modules/matchedScreen.module.css'
import womanPhoto from '../../images/womanPhoto.jpg'
import manPhoto from '../../images/manPhoto.png'

const MatchedScreen = () => {
    return (
        <div className={`${styleMatched.viewport} text-white offset-lg-2 col-lg-8 container mt-2`}>
            <div className={styleMatched.matchers}>
                <img src={womanPhoto} alt='womanPhoto' />
                <div className={styleMatched.heart}>{'🎔'}</div>
                <img className={styleMatched.rightPhoto} src={manPhoto} alt='manPhoto' />
            </div>
            <div className='col-12 text-center'>
                <h1 className='text-white'>You Matched!!!</h1>
                <p className='offset-2 col-8'>Make the first move and say something nice.</p>
            </div>

            <div className={styleMatched.aboutContainer}>

                <div className={styleMatched.aboutItem}>
                    <LoveSVG />
                    <p className={styleMatched.aboutIconText}>Love</p>
                </div>

                <div className={styleMatched.aboutItem}>
                    <FriendshipSVG />
                    <p className={styleMatched.aboutIconText}>Friendship</p>
                </div>
            </div>
        </div>
    )
}

export default MatchedScreen