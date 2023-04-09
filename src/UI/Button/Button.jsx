import React from 'react'
import classes from './Button.module.css'

const Button = ({title, style}) => {
  return (
    <div style={style} className={classes.button}><span>{title}</span></div>
  )
}

export default Button