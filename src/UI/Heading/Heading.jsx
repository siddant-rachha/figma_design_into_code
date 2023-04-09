import React from 'react'
import classes from './Heading.module.css'

const Heading = ({title}) => {
    return (
        <div className={classes.heading}>
            <div className={classes.line}></div>
            <div className={classes.title}>{title}</div>
            <div className={classes.line}></div>
        </div>
    )
}

export default Heading