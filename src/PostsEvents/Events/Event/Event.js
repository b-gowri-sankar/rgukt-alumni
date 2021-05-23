import React from 'react'
import classes from './Event.module.css';

const Event = (props) => {
    console.log(props)
    return (
        <div className={classes.Event}>
            <div className={classes.DateContainer}>
                <p>Saturday</p>
                <p className={classes.Date}> {props.event.date}</p>
            </div>
            <div className={classes.TitleContainer}>
                <p className={classes.Title}>{props.event.title}</p>
            </div>
        </div>
    );
}

export default Event;