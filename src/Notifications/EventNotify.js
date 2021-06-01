import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Event from '../PostsEvents/Events/Event/Event'
import classes from './PostNotify.module.css'


const EventNotify = (props) => {
    const events = props.event;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    return (
        <div>
            <h4 className={classes.internship__title}>Events</h4>
            { events && events.map((event) => (
                <Link to={'/event/'+event.id}>
                    <Event event={event} id={event.id} />
                </Link>
            ))}
            <Link to='/events'>
            <div className={classes.Post}>
                <p className={classes.Date}>View More</p>
            </div>
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        // center: state.center.projects for demo purposes
        event: state.firestore.ordered.events,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events', limit:2, orderBy: ['createdAt', 'desc']}
    ])
)(EventNotify)

