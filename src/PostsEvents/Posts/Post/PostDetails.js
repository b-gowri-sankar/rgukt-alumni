import classes from './PostDetails.module.css'
import React from 'react'

function PostDetails() {
    console.log('we are in the postdetails')
    return (
        <div className={classes.PostDetails}>
            <h1>Title</h1>
            <p>Posted Date:</p>
            <p>Description</p>
        </div>
    )
}

export default PostDetails
