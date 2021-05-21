import React from 'react'
import classes from './Event.module.css';

const Event = () => {
    return (
        <div className={classes.Event}>
            <div className={classes.DateContainer}>
                <p>Saturday</p>
                <p className={classes.Date}> Date</p>
            </div>
            <div className={classes.TitleContainer}>
                <p className={classes.Title}> Michigan Chapter Social Hour May 2021</p>
                <p className={classes.EventMode}>Event complete</p>
            </div>
        </div>
    );
}

export default Event;