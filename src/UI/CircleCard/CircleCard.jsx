import React from 'react'
import classes from './CircleCard.module.css'

const CircleCard = ({ src, title, lazy }) => {
    return (

        <>
            {lazy == true ?

                <div className={classes.category}>
                    <div className={classes.imageLazy}></div>
                    <div className={classes.titleLazy}></div>
                    <div className={classes.titleLazy}></div>
                </div>

                :

                <div className={classes.category}>
                    <img src={src}></img>
                    <div className={classes.title}>{title}</div>
                </div>
            }
        </>
    )
}

export default CircleCard