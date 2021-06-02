import React from 'react';
import Banner from './Banner/Banner'
import Notifications from './Notifications/Notifications'
import classes from './HomePage.module.css'
import ProfileCarousel from './Notifications/ProfileCarousel/ProfileCarousel';
// import Input from './UI/input/input'

const homePage = () => {
    console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            <div className={classes.container}>
                <Notifications />
            </div>
            <div className={classes.ProfileCarousel}>
                <div className={classes.header}>
                    <h4>Notable Alumni</h4>
                </div>
                <ProfileCarousel />
            </div>
        </div>
    )
}

export default homePage;