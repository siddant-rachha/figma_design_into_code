import React from 'react'
import classes from './Footer.module.css'

//icons
import facebook from '../../assets/icons/facebook1.svg'
import pinterest from '../../assets/icons/pinterest1.svg'
import linkedin from '../../assets/icons/linkedin1.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'


const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.section1}>


                <div className={classes.part1}>
                    <div className={classes.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
                    </div>
                    <div className={classes.icon}>
                        <a href=""><img src={facebook}></img></a>
                        <a href=""><img src={twitter}></img></a>
                        <a href=""><img src={instagram}></img></a>
                        <a href=""><img src={linkedin}></img></a>
                        <a href=""><img src={pinterest}></img></a>

                    </div>
                </div>

                <div className={classes.part2}>
                    <div className={classes.part2Section}>
                        <div className={classes.title}>ONLINE SHOPPING</div>
                        <div>Men’s T-Shirts</div>
                        <div>Women’s Wear</div>
                        <div>Winter Collections</div>
                        <div>Hooded T-Shirts</div>
                        <div>Streetwear Collections</div>
                    </div>
                    <div className={classes.part2Section}>
                        <div className={classes.title}>CUSTOMER POLICIES</div>
                        <div>Men’s T-Shirts</div>
                        <div>Women’s Wear</div>
                        <div>Winter Collections</div>
                        <div>Hooded T-Shirts</div>
                        <div>Streetwear Collections</div>
                    </div>
                    <div className={classes.part2Section}>
                        <div className={classes.title}>STORE INFORMATION</div>
                        <div>Men’s T-Shirts</div>
                        <div>Women’s Wear</div>
                        <div>Winter Collections</div>
                        <div>Hooded T-Shirts</div>
                        <div>Streetwear Collections</div>
                    </div>
                </div>

            </div>

            
            <div className={classes.section2}>
                ©2022-23 Powered By dummy team
            </div>


        </div>
    )
}

export default Footer