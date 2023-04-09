import React from 'react'

const Image = ({src, style}) => {
  return (
    <div>
        <img style={{width:"100%", ...style}} src={src}></img>
    </div>
  )
}

export default Image