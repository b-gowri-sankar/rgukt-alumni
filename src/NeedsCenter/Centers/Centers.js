import React from 'react';
import Center from './Center/Center';
import classes from './Centers.module.css'

const Centers = () => {
    return (
        <div className={classes.Centers}>
            <div>
                    <p className={classes.Centers__title}>Internships</p>
            </div>
            <div>
                <Center />
                <Center />
                <Center />
            </div>
            
        </div>
    )
}

export default Centers;