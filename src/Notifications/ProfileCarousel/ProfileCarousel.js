import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import ProfileNotify from './ProfileNotify'

const ProfileCarousel = (props) => {
    const { profiles } = props;
    return (
        <div>
            {profiles && profiles.map((profile) => {
                <ProfileNotify doc={profile} key={ profile.id }/>
            })}
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