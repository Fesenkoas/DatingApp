import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { sendMessage } from '../../../redux/chatsSlice'
import style from '../../../css_modules/matchedScreen.module.css'

const SendSVG = ({ message }) => {

    const dispatch = useDispatch();
    const { userIndex } = useParams();
    const handleSendClick = () => {
        dispatch(sendMessage({
            index: userIndex,
            message: message
        }));
    }

    return (
        <svg onClick={handleSendClick} className={style.sendIcon} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6249 0.317471L1.12492 12.0313C-0.487585 13.003 -0.332897 15.4884 1.3921 16.2257L6.74992 18.5352V22.6563C6.74992 24.922 9.52492 25.8546 10.8093 24.0528L12.8624 21.1671L18.1077 23.4229C18.3843 23.5401 18.6749 23.5987 18.9655 23.5987C19.3499 23.5987 19.7296 23.4962 20.0718 23.296C20.6718 22.9444 21.0843 22.3194 21.1921 21.6114L23.9765 2.70517C24.2624 0.747159 22.2468 -0.654209 20.6249 0.317471ZM8.99992 22.6563V19.502L10.7155 20.2393L8.99992 22.6563ZM18.9655 21.255L11.7562 18.1544L18.328 8.27646C18.8296 7.51962 17.8827 6.64071 17.2171 7.2413L7.30304 16.2403L2.24992 14.0626L21.7499 2.34384L18.9655 21.255Z" fill="#725AC1" />
        </svg>
    )
}

export default SendSVG