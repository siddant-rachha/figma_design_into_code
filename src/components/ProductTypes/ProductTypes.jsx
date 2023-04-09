import React from 'react'
import classes from './ProductTypes.module.css'
import ProductCardType from '../../UI/ProductCardType/ProductCardType'

const ProductTypes = ({ productTypes }) => {
    return (

        <div className={classes.container}>
            {
                productTypes.map((p) => {
                    return <ProductCardType key={p.id} title={p.title} img={p.img} />
                })
            }

        </div>
    )
}

export default ProductTypes