import React from 'react';
import classes from './Banner.module.css'
import {connect }from 'react-redux'
// import {Redirect } from 'react-router-dom'

const Banner = (props) => {
    const auth = props.auth;
    let button = (
        <div className={classes.Banner__buttons}>
            <button className={classes.Banner__button}>
                Sign UP
                    </button>
            <button className={classes.Banner__button}>
                Log In
                    </button>
        </div>
    );
    button = !auth.uid ? button : null;

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
                {/* {!auth.uid?{button}:null} */}
                {button}
                <h1 className={classes.Banner__description}>
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh,(Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f) of UGC Act, 1956)
                </h1>
            </div>
            <div className={classes.Banner__fadeBottom}></div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(Banner)