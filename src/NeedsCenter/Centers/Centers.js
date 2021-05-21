import React from 'react';
import Center from './Center/Center';
import classes from './Centers.module.css'

const Centers = () => {
    return (
        <div>
            <p className={classes.Centers__title}>Internships</p>
            <Center />
            <Center />
        </div>
    )
}

export default Centers;