import React from 'react'
import classes from './Navbar.module.css'

//icons
import call from '../../assets/icons/call-white.svg'
import menu from '../../assets/icons/menu.svg'
import search from '../../assets/icons/search.svg'
import profile from '../../assets/icons/profile.svg'
import cart from '../../assets/icons/cart.svg'
import wishlist from '../../assets/icons/wishlist.svg'


const Navbar = () => {
    return (
        <>
            <div className={classes.navbar}>

                <div className={classes.annoucement}>
                    <div className={classes.section1}>
                        Welcome to Our Store Hiscraves
                    </div>
                    <div className={classes.section2}>
                        <span style={{margin: "0 11px"}}><img src={call}></img></span>
                        <span>Call Us: 1234567890</span>
                    </div>
                </div>

                <div className={classes.nav}>
                    <div><span><img src={menu}></img></span></div>
                    <div>Logo Here</div>
                    <div className={classes.list}>
                        <span><img src={search}></img></span>
                        <span><img src={wishlist}></img></span>
                        <span><img src={cart}></img></span>
                        <span><img src={profile}></img></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar