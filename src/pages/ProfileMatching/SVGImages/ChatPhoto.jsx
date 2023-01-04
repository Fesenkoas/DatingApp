import React from 'react'

const ChatPhoto = ({ size }) => {
    return (
        <svg className={size} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="29" fill="#725AC1" stroke="white" strokeWidth="2" />
            <path d="M29.5003 30.5C33.7575 30.5 37.2087 27.0488 37.2087 22.7916C37.2087 18.5345 33.7575 15.0833 29.5003 15.0833C25.2431 15.0833 21.792 18.5345 21.792 22.7916C21.792 27.0488 25.2431 30.5 29.5003 30.5Z" stroke="white" strokeWidth="3.46875" />
            <path d="M37.2086 33.5833H37.7508C40.0831 33.5833 42.0506 35.3202 42.34 37.6347L42.942 42.4508C43.172 44.2911 41.737 45.9166 39.8824 45.9166H19.118C17.2633 45.9166 15.8284 44.2911 16.0584 42.4508L16.6605 37.6347C16.9498 35.3202 18.9173 33.5833 21.2498 33.5833H21.7919" stroke="white" strokeWidth="3.46875" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="51" cy="9" r="5.48966" fill="#21A836" stroke="white" strokeWidth="1.02069" />
        </svg>

    )
}

export default ChatPhoto