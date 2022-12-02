import React from 'react'
import ExitSVG from './SVGImages/ExitSVG'
import LoveSVG from './SVGImages/LoveSVG'
import FriendshipSVG from './SVGImages/FriendshipSVG'
import style from '../../css_modules/matchedScreen.module.css'
import womanPhoto from '../../images/womanPhoto.jpg'
import manPhoto from '../../images/manPhoto.png'
import SendSVG from './SVGImages/SendSVG'

const MatchedScreen = () => {
    return (
        <div className={`${style.viewport} text-white offset-lg-2 col-lg-8 container border border-white mt-2`}>
            <ExitSVG />
            <div className={style.matchers}>
                <img src={womanPhoto} alt='womanPhoto' />
                <div className={style.heart}>{'🎔'}</div>
                <img className={style.rightPhoto} src={manPhoto} alt='manPhoto' />
            </div>
            <div className='col-12 text-center'>
                <h1 className='text-white'>You Matched!!!</h1>
                <p className='offset-2 col-8'>Make the first move and say something nice.</p>
            </div>
            
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

            <div className={`${style.messageInput} col-12`}>
                <input type='text' placeholder='Say something nice...' />
                <SendSVG />
            </div>

        </div>
    )
}

export default MatchedScreen