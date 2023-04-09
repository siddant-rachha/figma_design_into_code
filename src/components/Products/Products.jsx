import React from 'react'
import classes from './Products.module.css'

//ui
import Heading from '../../UI/Heading/Heading'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'

const Products = ({ products, title }) => {
    return (
        <>
            <div className={classes.container}>

                <Heading title={title} />

                <div className={classes.products}>
                    {
                        products.map((p) => {
                            return (
                                <Card key={p.id} title={p.title} img={p.img} size={p.size} price={p.price} priceSlashed={p.priceSlashed} />
                            )
                        })
                    }
                </div>

                <Button title="View All" style={{margin:"auto"}} />

            </div>
        </>
    )
}

export default Products