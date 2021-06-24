import React from 'react';
import Banner from './Banner/Banner'
import Notifications from './Notifications/Notifications'
import classes from './HomePage.module.css'
import SingleSocialFeed from './Components/SingleSocialFeed/SingleSocialField'
// import Feed from "react-instagram-authless-feed"

import ProfileCarousel from './Notifications/ProfileCarousel/ProfileCarousel';
import QueryCarousel from './Notifications/queryCarousel/queryCarousel'
import Images from './Notifications/Images/images';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
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
                <div className={classes.box}>
                    <SingleSocialFeed />
                </div>
                <div className={classes.Images}>
                    <Images/>
                </div>
            </div>
            <div className={classes.flex}>
                <div className={classes.title__profile}>
                    <div className={classes.prifile__header}>                        
                        <p><span className={classes.profile__icon}><AccountCircleOutlinedIcon /></span><span className={classes.profile__text}>Profile</span></p>
                    </div>
                    <ProfileCarousel />
                </div>
                <div>
                    <div className={classes.prifile__header}>                        
                        <p><span className={classes.profile__icon}><CommentOutlinedIcon /></span><span className={classes.profile__text}>Queries</span></p>
                    </div>
                    <QueryCarousel />
                </div>
            </div>
        </div>
    )
}

export default homePage;