import React from 'react';
import Event from './Event/Event';
import classes from './Events.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const Events = (props) => {
    const events = props.event;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    console.log(events)
    return (
        <div className={classes.Events}>
            <div className={classes.Events__left}>
                <p className={classes.EventsTitle}>Events</p>
            </div>
            <div className={classes.Events__right}>
            { events && events.map((event) => (
                <Link to={'/event/'+event.id}>
                    <Event event={event} id={event.id} />
                    </Link>
            ))}
            </div>
            {/* <Event />
            <Event />
            <Event /> */}
        </div>
    );
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
        {collection:'events', orderBy: ['createdAt', 'desc']}
    ])
)(Events)