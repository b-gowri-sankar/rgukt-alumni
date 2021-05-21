import React from 'react';
import classes from './Center.module.css';

const center = () => {
    return (
            <div className={classes.center}>
                <p className={classes.center__title}> Various Roles</p>
                <p className={classes.center__name}> Siemens Digital Industries Software Inc.</p>
                <p className={classes.center__location}> Location: SF Bay Area, California </p>
                </div>

    )
}

export default center;