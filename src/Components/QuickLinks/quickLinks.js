import React from 'react'
import classes from './quickLinks.module.css'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const quickLinks = (props) => {

    const events_title = props.events;

    return (
        <div className={classes.QuickLinks}>
            <div className={classes.left}>
                <p>Privacy Policy</p>
            </div>
            <div className={classes.AboutUs}>
                <Link to={{ pathname: "https://www.rguktrkv.ac.in/Institute.php?view=AboutRGUKT" }} target="_blank">
                    About Us
                </Link>
            </div>
            <div>
                <Link to='/events'>
                    <p>Events</p>
                </Link>
                { events_title && events_title.slice(0,3).map((event) => (
                    <Link to={'/event/'+event.id}>
                        <p className={classes.event__title_quicklinks}>{event.title}</p>
                    </Link>
                ))}
            </div>
            <div className={classes.right}>
                <Link to={{pathname: 'https://www.rguktrkv.ac.in/Institute.php?view=ContactUs'}} target="_blank">
                    <p>Contact Us</p>
                </Link>
                <a href="mailto:director@rguktrkv.ac.in">director@rguktrkv.ac.in</a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        // center: state.center.projects for demo purposes
        events: state.firestore.ordered.events,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events', orderBy: ['createdAt', 'desc']}
    ])
)(quickLinks)

