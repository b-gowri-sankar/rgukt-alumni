import React from 'react'
import classes from './FacebookFee.module.css'

function FacebookFee() {
    return (
        <>
            <iframe title='facebook feed' scrolling="yes" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Frguraa2&width=500&height=600&stream=true&header=true" className={classes.facebook}></iframe>
        </>
    )
}

export default FacebookFee
