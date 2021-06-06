import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import { Link } from 'react-router-dom'
import ProfileNotify from './Profile/Profile'
import Carousel from 'react-elastic-carousel'

import classes from './ProfileCarousel.module.css'


const ProfileCarousel = (props) => {
    const { profiles } = props;

    const breakPoints = [
        { width: 500, itemsToShow:1},
        { width: 768, itemsToShow:2},
        { width: 1200, itemsToShow:2},
        { width: 1500, itemsToShow:2},

    ]

    return (
        <div className={classes.ProfileCarousel}>
            <Carousel breakPoints={breakPoints}>
                {profiles && profiles.map((profile) => {
                return <ProfileNotify doc={profile} key={ profile.id }/>
                })}
            </Carousel>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("notification chamber",state.firestore.data.centers)
    return {
        profiles: state.firestore.ordered.profiles,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'profiles', limit: 10, orderBy: ['createdAt', 'desc']}
    ])
)(ProfileCarousel)