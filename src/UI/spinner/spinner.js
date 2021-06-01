import React from 'react'
import classes from './spinner.module.css'

const spinner = () => {
    return (
        <div className={classes.loader_bg}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default spinner