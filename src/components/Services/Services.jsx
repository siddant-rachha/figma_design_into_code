import React from 'react'
import classes from './Services.module.css'

import diamond from '../../assets/images/sale/diamond.svg'
import discount from '../../assets/images/sale/discount.svg'


//images
import group1 from '../../assets/images/sale/Group1.svg'
import group2 from '../../assets/images/sale/Group2.svg'
import group3 from '../../assets/images/sale/Group3.svg'
import group4 from '../../assets/images/sale/Group4.svg'

import circle1 from '../../assets/images/sale/circle1.svg'
import circle2 from '../../assets/images/sale/circle2.svg'



const Services = () => {
    return (
        <>
            <div className={classes.sale}>
                <div>
                    <div><img src={diamond}></img></div>
                    <div className={classes.titleSM}>Hurry Up!</div>
                    <div className={classes.titleXL}>85% OFF</div>
                    <div className={classes.titleSM}>Sale</div>
                    <div className={classes.button}>SHOP NOW</div>

                </div>
                <div>
                    <div><img src={discount}></img></div>
                    <div className={classes.titleSM}>Hurry Up!</div>
                    <div className={classes.titleXL}>85% OFF</div>
                    <div className={classes.titleSM}>Sale</div>
                    <div className={classes.button}>SHOP NOW</div>
                </div>
            </div>

            <div className={classes.benefits}>
                <div className={classes.container}>
                    <div className={classes.circle1}></div>
                    <div className={classes.items}>
                        <div className={classes.item}><img src={group1} /></div>
                        <div className={classes.line}></div>
                        <div className={classes.item}><img src={group2} /></div>
                        <div className={classes.line}></div>
                        <div className={classes.item}><img src={group3} /></div>
                        <div className={classes.line}></div>
                        <div className={classes.item}><img src={group4} /></div>
                    </div>
                    <div className={classes.circle2}></div>
                </div>
            </div>


            <div className={classes.subscribe}>
                <div className={classes.container}>
                    <div className={classes.circle1}><img src={circle1}></img></div>
                    <div className={classes.email}>
                        <div className={classes.title}>Subscribe to get updates on exciting offers & deals</div>
                        <div className={classes.email}></div>
                    </div>
                    <div className={classes.circle2}><img src={circle2}></img></div>
                </div>
            </div>
        </>
    )
}

export default Services