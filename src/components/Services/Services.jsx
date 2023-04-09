import React from 'react'
import classes from './Services.module.css'


//images
import group1 from '../../assets/images/services/Group 199.svg'
import group2 from '../../assets/images/services/Group 200.svg'
import group3 from '../../assets/images/services/Group 201.svg'
import group4 from '../../assets/images/services/Group 202.svg'

const Services = () => {
    return (
        <div className={classes.services}>

            <div className={classes.container}>
                <div className={classes.circle1}></div>
                <div className={classes.item}><img src={group1} /></div>
                <div className={classes.line}></div>
                <div className={classes.item}><img src={group2} /></div>
                <div className={classes.line}></div>
                <div className={classes.item}><img src={group3} /></div>
                <div className={classes.line}></div>
                <div className={classes.item}><img src={group4} /></div>
                <div className={classes.circle2}></div>
            </div>

        </div>
    )
}

export default Services