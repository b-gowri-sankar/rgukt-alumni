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
// import { withWidth } from '@material-ui/core';
// import Input from './UI/input/input'

const homePage = () => {
    // console.log("we are in the homepage")
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
            <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            background: '#004466',
                            color: 'white',
                            padding: '10px',
                            
                        }}>
                            <AccountCircleOutlinedIcon />
                            <span className={classes.text}>Profile</span>
                        </div>  
                    <ProfileCarousel />
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            background: '#004466',
                            color: 'white',
                            padding: '10px'
                            
                        }}>
                            <CommentOutlinedIcon />
                            <span className={classes.text}>Queries</span>
                        </div>  
                    <QueryCarousel />
                </div>
            </div>
        </div>
    )
}

export default homePage;