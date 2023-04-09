import React from 'react'
import classes from './Sale.module.css'

//images

import diamond from '../../assets/images/sale/diamond.svg'
import discount from '../../assets/images/sale/discount.svg'

const Sale = () => {
    return (
        <div className={classes.sale}>
            <div className={classes.item}>
                <div><img src={diamond}></img></div>
                <div className={classes.titleSM}>Hurry Up!</div>
                <div className={classes.titleXL}>85% OFF</div>
                <div className={classes.titleSM}>Sale</div>
                <div className={classes.button}>SHOP NOW</div>
            </div>

            <div className={classes.item}>
                <div><img src={discount}></img></div>
                <div className={classes.titleSM}>Hurry Up!</div>
                <div className={classes.titleXL}>85% OFF</div>
                <div className={classes.titleSM}>Sale</div>
                <div className={classes.button}>SHOP NOW</div>
            </div>
        </div>
    )
}

export default Sale