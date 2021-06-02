import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

const ProfileCarousel = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("notification chamber",state.firestore.data.centers)
    return {
        center: state.firestore.ordered.centers,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'profiles', limit: 10, orderBy: ['createdAt', 'desc']}
    ])
)(ProfileCarousel)