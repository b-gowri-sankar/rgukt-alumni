import React from 'react'
import CenterNotify from './CenterNotify'
import EventNotify from './EventNotify'
import PostNotify from './PostNotify'
import classes from './Notifications.module.css'

const Notifications = () => {
    return (
        <div className={classes.Notifications}>
            <PostNotify />
            <EventNotify />
            <CenterNotify />
        </div>
    )
}

export default Notifications
