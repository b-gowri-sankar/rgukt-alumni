import React from 'react';
import Banner from './Banner/Banner'
import Notifications from './Notifications/Notifications'
import classes from './HomePage.module.css'

const homePage = () => {
    console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            <div className={classes.container}>
                <Notifications />
            </div> 
        </div>
    )
}

export default homePage;