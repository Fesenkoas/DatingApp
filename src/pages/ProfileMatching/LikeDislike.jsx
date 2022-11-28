import React from 'react'
import Dislike from './SVGImages/DislikeSvg'
import Like from './SVGImages/LikeSvg'

const LikeDislike = () => {
  return (
    <div className='row mt-2 mb-2'>
        <Like />
        <Dislike />
    </div>
  )
}

export default LikeDislike