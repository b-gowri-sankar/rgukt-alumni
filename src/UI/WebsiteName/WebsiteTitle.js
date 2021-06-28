import classes from './WebsiteTitle.module.css'
import React from 'react'

const WebsiteTitle = (props)=>{
    return (
        <h5 className={classes.WebsiteTitle}>
            {props.children}
        </h5>
    )
}

export default WebsiteTitle
