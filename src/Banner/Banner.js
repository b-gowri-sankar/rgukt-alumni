import React from 'react';
import classes from './Banner.module.css'

const Banner = () => {
    return (
        <header className={classes.Banner}
            style={{
                backgroundSize: "cover",
                backgroundImage:`url(
                    "https://www.rguktrkv.ac.in/images/2.jpg" 
               )`,
                backgroundPosition:'center center'
            }}>
            <div className={classes.Banner__contents}>
                <h1 className={classes.Banner__title}>
                    RGUKT Alumni
                </h1>
                <div className={classes.Banner__buttons}>
                    <button className={classes.Banner__button}> 
                        Sign UP
                    </button>
                    <button className={classes.Banner__button}>
                        Log In
                    </button>
                </div>
                <h1 className={classes.Banner__description}>
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh,(Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f) of UGC Act, 1956)
                </h1>
            </div>
            <div className={classes.Banner__fadeBottom}></div>
        </header>
    );
}
export default Banner;