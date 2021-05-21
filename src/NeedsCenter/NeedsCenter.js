import React from 'react';
import Centers from './Centers/Centers'
import classes from './NeedsCenter.module.css';
import Needs from './Needs/Needs';

const needsCenter = () => {
    return (
        <div className={classes.NeedsCenter}>
            <div>
                <p className={classes.Needs__card}>
                    Needs
                </p>
                <Needs />
            </div>
            <div>
                <Centers className={classes.Centers__card}/>
            </div>
        </div>
    );
}

export default needsCenter