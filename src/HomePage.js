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
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const homePage = (props) => {

    const events = props.events;
    // console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            <div className={classes.container}>
                <Notifications events={ events }/>
            </div>
            <div className={classes.AnotherSocialMediaBox}>
                <div className={classes.SingleSocialFeedBox}>
                    <SingleSocialFeed />
                </div>
                <div className={classes.AnotherImages}>
                    <Images/>
                </div>
            </div>
            <div className={classes.ProfileQuery}>
                <div className={classes.carouselProfile}>
                    <div className={classes.Profile_card}>
                        <AccountCircleOutlinedIcon style={{fontSize:'30px'}}/>
                            <span className={classes.text}>Profile :-</span>
                    </div>
                    <div>
                        <ProfileCarousel />
                    </div>
                </div>
                <div className={classes.carouselProfile}>
                    <div
                        className={classes.Profile_card}>
                            <CommentOutlinedIcon style={{fontSize:'30px'}}/>
                            <span className={classes.text}>Queries :-</span>
                        </div>  
                    <QueryCarousel />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        // center: state.center.projects for demo purposes
        events: state.firestore.ordered.events,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events', limit:3, orderBy: ['createdAt', 'desc']}
    ])
)(homePage)