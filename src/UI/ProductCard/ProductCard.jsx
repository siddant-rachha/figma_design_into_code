import React from 'react'
import classes from './ProductCard.module.css'

//icons

import cart from '../../assets/icons/cart-white.svg'
import wishlist from '../../assets/icons/wishlist-white.svg'
import share from '../../assets/icons/share-white.svg'


const ProductCard = ({ img, title, price, size = [], priceSlashed }) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={img} />
                <div className={classes.imageOverlay}>
                    <div><img src={cart}></img></div>
                    <div><img src={wishlist}></img></div>
                    <div><img src={share}></img></div>

                </div>
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}><span>&#x20B9;{price}</span><span className={classes.priceSlashed}>&#x20B9;{priceSlashed}</span></div>
            <div className={classes.size}>
                {size.map((s, index) => {
                    return <div key={index}>{s}</div>
                })}
            </div>


        </div>
    )
}

export default ProductCard