import React from 'react'
import classes from './Subscribe.module.css'

import circle1 from '../../assets/images/sale/circle1.svg'
import circle2 from '../../assets/images/sale/circle2.svg'

const Subscibe = () => {
    return (
        <div className={classes.subscribe}>
            <div className={classes.container}>
                <div className={classes.circle1}><img src={circle1}></img></div>

                <div className={classes.content}>
                    <div className={classes.title}>Subscribe to get updates on exciting offers & deals</div>
                    <div className={classes.email}>
                        <input placeholder='Enter your Email'></input>
                        <button className={classes.button}>Subcribe</button>
                    </div>
                </div>

                <div className={classes.circle2}><img src={circle2}></img></div>


            </div>


        </div>
    )
}

export default Subscibe