import React from 'react'
import classes from './Categories.module.css'

//ui
import CircleCard from '../../UI/CircleCard/CircleCard'



const Categories = ({ data, banner }) => {

    return (
        <>

            {data == undefined ?
                <div className={classes.categories}>

                    <CircleCard lazy={true} />
                    <CircleCard lazy={true} />
                    <CircleCard lazy={true} />
                    <CircleCard lazy={true} />
                    <CircleCard lazy={true} />
                    <CircleCard lazy={true} />

                </div>

                :

                <div className={classes.categories}>
                    {data.map((d) => {
                        return (
                            <CircleCard src={d.img} key={d.id} title={d.title} />
                        )
                    })}
                </div>
            }

            <div className={classes.banners}>
                <div className={classes.sections}>
                    <div className={classes.section1}>
                        {banner.map((b) => {
                            if (b.id >= 1 && b.id <= 2) return <img key={b.id} src={b.img}></img>
                        })}
                    </div>
                    <div className={classes.section2}>
                        {banner.map((b) => {
                            if (b.id >= 3 && b.id <= 5) return <img key={b.id} src={b.img}></img>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories