import React from 'react';
import Event from './Event/Event';
import classes from './Events.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Link} from 'react-router-dom'

const Events = (props) => {
    const events = props.event;
    return (
        <div className={classes.Events}>
            <p className={classes.EventsTitle}>Events</p>
            { events && events.map((event) => (
                <Link to={'/event/'+event.id}>
                    <Event event={event} id={event.id} />
                    </Link>
            ))}
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
        event:state.firestore.ordered.events
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events'}
    ])
)(Events)