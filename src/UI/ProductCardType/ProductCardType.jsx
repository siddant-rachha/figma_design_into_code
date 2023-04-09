import React from 'react'
import classes from './ProductCardType.module.css'

const ProductCardType = ({img, title}) => {
  return (
    <div className={classes.card}>
        <img src={img}></img>
        <div className={classes.titleDiv}>{title}</div>
    </div>
  )
}

export default ProductCardType