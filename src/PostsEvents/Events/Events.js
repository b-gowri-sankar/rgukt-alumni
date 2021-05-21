import React from 'react';
import Event from './Event/Event';
import classes from './Events.module.css';

const Events = () => {
    return (
        <div className={classes.Events}>
            <p className={classes.EventsTitle}>Events</p>
            <Event />
            <Event />
            <Event />
        </div>
    );
}

export default Events;