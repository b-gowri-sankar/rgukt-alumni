import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={classes.Header}>
            <h4><Link to='/' style={{color:'whitesmoke'}}>RGUKTAA </Link></h4>
            <div className={classes.socialMediaIcons}>
                <Link to={{pathname:'https://twitter.com/RGUKTOfficial'}} target='_blank'>
                    <img src='./images/twiiter.svg' alt='twitter' className={classes.Icons}/>
                </Link>
                <Link to={{ pathname:'https://www.facebook.com/RGUKTOfficial/'}} target='_blank'>
                    <img src='./images/facebook.svg' alt='facebook' className={classes.Icons} />
                </Link>
                <Link to={{pathname:'https://www.linkedin.com/school/rgukt-rkv/'}} target="_blank">
                    <img src='./images/linkedin.svg' alt='linkedin' className={classes.Icons} />
                </Link>
                <Link to={{pathname:'https://www.instagram.com/rguraa/?hl=en'}} target="_blank">
                    <img src='./images/instagram.svg' alt='instagram' className={classes.Icons} />
                    </Link>
            </div>
        </div>
    )
}

export default Header
