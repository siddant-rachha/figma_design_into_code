import React from 'react'
import classes from './CircleCard.module.css'

const CircleCard = ({src,title}) => {
    return (
        <div className={classes.category}>
            <img src={src}></img>
            <div className={classes.title}>{title}</div>
        </div>
    )
}

export default CircleCard