import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearAvatarAnimation } from '../../../redux/profileSlice';

const ExitSVG = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleExitClick = () => {
        navigate('/profile/matcher');
        dispatch(clearAvatarAnimation());
    }
    
    return (
        <div className='col-12 text-end'>
            <svg onClick={handleExitClick} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17.1923L9 9.19232M17 1.19232L8.99847 9.19232M8.99847 9.19232L1 1.19232M9 9.19232L17 17.1923" stroke="#F7ECE1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default ExitSVG