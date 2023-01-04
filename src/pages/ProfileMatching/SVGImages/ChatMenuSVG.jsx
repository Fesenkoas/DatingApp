import React from 'react'
import style from '../../../css_modules/chats.module.css'

const chatMenuSVG = () => {
    return (
        <svg className={style.chatHeaderItem} width="6" height="25" viewBox="0 0 6 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5C0 13.3288 0.316071 14.1237 0.87868 14.7097C1.44129 15.2958 2.20435 15.625 3 15.625C3.79565 15.625 4.55871 15.2958 5.12132 14.7097C5.68393 14.1237 6 13.3288 6 12.5C6 11.6712 5.68393 10.8763 5.12132 10.2903C4.55871 9.70424 3.79565 9.375 3 9.375C2.20435 9.375 1.44129 9.70424 0.87868 10.2903C0.316071 10.8763 0 11.6712 0 12.5ZM0 3.125C0 3.9538 0.316071 4.74866 0.87868 5.33471C1.44129 5.92076 2.20435 6.25 3 6.25C3.79565 6.25 4.55871 5.92076 5.12132 5.33471C5.68393 4.74866 6 3.9538 6 3.125C6 2.2962 5.68393 1.50134 5.12132 0.915291C4.55871 0.32924 3.79565 0 3 0C2.20435 0 1.44129 0.32924 0.87868 0.915291C0.316071 1.50134 0 2.2962 0 3.125ZM0 21.875C0 22.7038 0.316071 23.4987 0.87868 24.0847C1.44129 24.6708 2.20435 25 3 25C3.79565 25 4.55871 24.6708 5.12132 24.0847C5.68393 23.4987 6 22.7038 6 21.875C6 21.0462 5.68393 20.2513 5.12132 19.6653C4.55871 19.0792 3.79565 18.75 3 18.75C2.20435 18.75 1.44129 19.0792 0.87868 19.6653C0.316071 20.2513 0 21.0462 0 21.875Z" fill="#725AC1" />
        </svg>

    )
}

export default chatMenuSVG