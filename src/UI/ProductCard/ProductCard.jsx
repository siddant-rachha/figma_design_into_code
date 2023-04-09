import React from 'react'
import classes from './ProductCard.module.css'

const ProductCard = ({img, title, price, size=[], priceSlashed}) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}><img src={img} /></div>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}><span>&#x20B9;{price}</span><span className={classes.priceSlashed}>&#x20B9;{priceSlashed}</span></div>
            <div className={classes.size}>
                {size.map((s,index)=>{
                    return <div key={index}>{s}</div>
                })}
            </div>
            <div className={classes.cardOverlay}>
                
            </div>

        </div>
    )
}

export default ProductCard