import React from 'react';
import Banner from './Banner/Banner'
import Notifications from './Notifications/Notifications'
import classes from './HomePage.module.css'
import ProfileCarousel from './Notifications/ProfileCarousel/ProfileCarousel';
import QueryCarousel from './Notifications/queryCarousel/queryCarousel'
import Images from './Notifications/Images/images';
// import Input from './UI/input/input'

const homePage = () => {
    console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            <div className={classes.container}>
                <Notifications />
            </div>
            <div className={classes.Flex}>
                <div className={classes.QueryCarousel}>
                    <div>
                        <h6 className={classes.title}>Queries</h6>
                    </div>
                    <QueryCarousel />
                </div>
                <div className={classes.imageCarousel}>
                    <div>
                        <h6 className={classes.title}>The Images</h6>
                    </div>
                    <Images />
                </div>
                <div className={classes.ProfileCarousel}>
                    <div className={classes.header}>
                        <h6 >Notable Alumni</h6>
                    </div>
                    <ProfileCarousel />
                </div>
            </div>
        </div>
    )
}

export default homePage;