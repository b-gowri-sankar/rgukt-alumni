import React from 'react'
import CenterNotify from './CenterNotify'
import EventNotify from './EventNotify'
import PostNotify from './PostNotify'
import classes from './Notifications.module.css'

const Notifications = () => {
    return (
        <div className={classes.Notifications}>
            <div className={classes.Notifications__box}>
                <PostNotify />
            </div>
            <div className={classes.Notifications__box}>
                <EventNotify />
            </div>
            <div className={classes.Notifications__box}>
                <CenterNotify />
            </div>
        </div>
    )
}

export default Notifications
