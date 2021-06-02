import React from 'react'
import classes from './EventDetails.module.css'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import Spinner from '../../../UI/spinner/spinner'

const EventDetails = (props) => {
    const { event } = props;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    if( event)
    {return (
        <div className={classes.EventDetails}>
            <h4>Title:{event.title}</h4>
            <p>Date:{ event.date}</p>
            <p>Time:{event.time}</p>
            <p>{event.content}</p>
        </div>
    );
    }
    else
        return (
            <Spinner />
        )
}

// const mapStateToProps = (state, ownProps ) => {
//     const id = ownProps.match.params.id;
//     console.log(state)
//     const events = state.firestore.data.events;
//     console.log('events',events)
//     const event = events ? events[id] : null;
//     // console.log(centers)
//     // console.log(id)
//     return {
//         event : event
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         {collection:'events'}
//     ])
// )(EventDetails)
const mapStateToProps = (state, ownProps) => {
    // console.log("events details",state)
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    // console.log(id)
    const event = events ? events[id] : null;
    // console.log('evnet', event)

    return {
        // center: state.center.projects for demo purposes
        event: event,
        auth:state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'events'}
    ])
)(EventDetails)