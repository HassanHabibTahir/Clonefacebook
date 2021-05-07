import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/story.css'
function Story({ image, proileSrc, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="stroy">
      <Avatar src={proileSrc} className="stroy_avatar" />
      <h4>{title}</h4>
    </div>
  )
}

export default Story
